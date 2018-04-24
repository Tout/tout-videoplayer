import hyperHTML from 'hyperhtml/cjs';

import childrenToSourceList from './util/childrenToSourceList.js';
import findBestSource from './util/findBestSource.js';
import loadHLS from './util/loadHLS.js';
import hydrateSource from './util/hydrateSource.js';
import MIME from './const/MIME.js';

class ToutVideoPlayer extends HTMLElement {
  // https://github.com/WebReflection/document-register-element#upgrading-the-constructor-context
  constructor(self) {
    self = super(self);
    // create a hyperHTML render function bound to us.
    self.hyperHTML = hyperHTML.bind(self);

    this._sourceList = [];
    return self;
  }

  /**
   * (re)Renders the element based on current state.
   */
  render() {
    // Rendering the content with hyperHTML.
    return this.hyperHTML`<div>
      <video controls></video>
    </div>`;
  }

  /**
   * Triggered when the component is mounted on a DOM.
   * Renders/Updates the element.
   */
  connectedCallback() {
    // console.log('connectedCallback');
    // this.children is an HTMLCollection which is live.
    // So we need to make a copy before we call render.
    const children = Array.from(this.children);
    // Render first because we will need a video element to set the source.
    this.render();

    // set the sourceList based on the children
    if (children.length > 0) {
      // Convert any child <source> elements into source objects.
      // Then hydrate those source objects.
      // Finnaly start loading of the source by setting sourceList.
      this.sourceList = childrenToSourceList(children).map(hydrateSource);
    }

    // listen for events
    // document.addEventListener('click', this)
  }

  /**
   * Triggered when the component is removed from a DOM.
   * Clean up/Destroy the element.
   */
  disconnectedCallback() {
    // stop listening to events
    // document.removeEventListener('click', this);
  }


  /**
   * When one of these attributes changes value, it triggers attributeChangedCallback
   * @return {Array} attribute names.
   */
  static get observedAttributes() { return ['src']; }
  /**
   * Triggered when an an observedAttribute has changed.
   * @param {String} attrName - the attribute name.
   * @param {Object} oldValue - the old value.
   * @param {Object} newValue - the new value.
   */
  attributeChangedCallback(attrName, oldValue, newValue) {
    // we only care about changes.
    if (oldValue === newValue) { return; }
    // console.log('attributeChangedCallback', attrName, oldValue, newValue);

    // Render so if we set src, the video element will exist.
    //TODO: Fix this so we don't need to call render here.
    //    : I think it's just an order of operations bug.
    this.render();
    this[attrName] = newValue;
  }

  /**
   * EventListener Interface
   * @param {Event} event - the event.
   * @link https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
   */
  handleEvent() {
    // const { type, target } = event;
    // re-render
    this.render();
  }

  // https://html.spec.whatwg.org/multipage/media.html#attr-media-src
  // > The src IDL attribute on media elements must reflect the content attribute of the same name
  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    // update the sourceList which is the real value used.
    this.sourceList =[hydrateSource({
      src: value,
    })];
  }

  /**
   * An array of source objects.
   * @return {Array}
   */
  get sourceList() {
    const { _sourceList } = this;
    return _sourceList;
  }
  /**
   * Picks the best source from the list,
   * loads any 3rd party support libraries,
   * and sets srcObject once the player can handle the source type.
   * @param {Array} value - Array of source objects.
   */
  set sourceList(value) {
    // make sure we have a value before trying to set.
    if (!value || value.length === 0) { return; }
    const { hasHLSSupport, hasDashSupport } = this;
    const source = findBestSource(hasHLSSupport, hasDashSupport, value);

    // Do we need to load the HLS Support?
    if (!hasHLSSupport && source.type === MIME.HLS) {
      // Attach the HLS library to our video element.
      loadHLS().then((Hls) => {
        // Add HLS support to the existing elVideo
        this.hls = new Hls();
        this.hls.attachMedia(this.elVideo);
        // Start loading the source now that we support it.
        this.srcObject = source;
      });
    }
    else if (!hasDashSupport && source.type === MIME.DASH) {
      //TODO: add Dash support
    }
    else {
      // The browser already supports the source.
      this.srcObject = source;
    }
  }

  /**
   * Returns True if the browser supports HLS playback.
   */
  get hasHLSSupport() {
    const { _supportsHLS } = this;
    // once we know if we have support, use the cached value.
    // this value can also be changed when loading 3rd party support.
    if (typeof _supportsHLS !== 'undefined') {
      return _supportsHLS;
    }
    // TODO: Store the result of the support check in storage
    //     : That will allow other players to skip checking/creating empty video elements.
    // check for support
    const elVideo = document.createElement('video');
    this._supportsHLS = elVideo.canPlayType('application/x-mpegURL') !== '';
    return this._supportsHLS;
  }
  get hasDashSupport() {
    //TODO: Add
    return false;
  }


  /**
   * Returns the current source object to use.
   * https://html.spec.whatwg.org/multipage/media.html#dom-media-srcobject
   * @return {Object}
   */
  get srcObject() {
    return this._currentSrc;
  }
  /**
   * Setting srcObject will start loading the video.
   * This replicates standard DOM behaviour where the async call starts when setting src/srcObject
   * @param  {Object} value
   */
  set srcObject(value) {
    const { elVideo, hasHLSSupport, hls, hasDashSupport } = this;
    this._currentSrc = value;

    // MP4 is easy because everyone supports it.
    if (value.type === MIME.MP4) {
      elVideo.src = value.src;
    }
    // Native HLS Support
    else if (hasHLSSupport && value.type === MIME.HLS) {
      elVideo.src = value.src;
    }
    // Native Dash Support
    else if (hasDashSupport && value.type === MIME.DASH) {
      elVideo.src = value.src;
    }
    // Use Hls.js API
    else if (value.type === MIME.HLS) {
      hls.loadSource(value.src);
    }
    // use Dash.js
    else if (value.type === MIME.DASH) {
      //TODO: add
    }
    else {
      throw new Error(`Unsupported video type: "${value.type}"`);
    }
  }

  get elVideo() {
    return this.querySelector('video');
  }
}
export default ToutVideoPlayer;
