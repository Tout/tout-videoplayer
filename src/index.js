import 'document-register-element';
import { hyper } from 'hyperhtml/esm';

import childrenToSourceList from './util/childrenToSourceList.js';
import findBestSource from './util/findBestSource.js';
import setSourceType from './util/setSourceType.js';
import loadHLS from './util/loadHLS.js';

class ToutVideoPlayer extends HTMLElement {
  // https://github.com/WebReflection/document-register-element#upgrading-the-constructor-context
  constructor(self) {
    self = super(self);
    // instead of this.innerHTML = '<div />', use this.hyperHTML`<div />`
    self.hyperHTML = hyper.bind(self);

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
    // this.children is an HTMLCollection which is live.
    // So we need to make a copy before we call render.
    const children = Array.from(this.children);
    // Render first because we will need a video element to set the source.
    this.render();
    // Convert any child <source> elements into our source list.
    // then set the source type helper properties
    this.sourceList = childrenToSourceList(children)
      .map(setSourceType);

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
  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    this.setAttribute('src', value);
  }

  /**
   * An array of source objects.
   * @return {Array}
   */
  get sources() {
    return this.sourceList;
  }
  get sourceList() {
    const { src, _sourceList } = this;
    // if we have a source list, use it.
    if (_sourceList.length > 0) {
      return _sourceList;
    }
    // else fallback to the src attribute.
    return [{
      src,
      //TODO: pick the real type based on the src filename
      type: 'video/mp4',
    }];
  }
  /**
   * Picks the best source from the list,
   * loads any 3rd party support libraries,
   * and sets srcObject once the player can handle the source type.
   * @param {Array} value - Array of source objects.
   */
  set sourceList(value) {
    if (!value || value.length === 0) { return; }
    const { hasHLSSupport, hasDashSupport } = this;
    const source = findBestSource(hasHLSSupport, hasDashSupport, value);

    // Do we need to load the HLS Support?
    if (source.isHLS && !hasHLSSupport) {
      // Load HLS Support
      loadHLS().then((Hls) => {
        // Add HLS support to the existing elVideo
        this.hls = new Hls();
        this.hls.attachMedia(this.elVideo);
        // Start loading the source now that we support it.
        this.srcObject = source;
      });
    }
    else if (source.isDash && !hasDashSupport) {
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
    if (value.isMP4) {
      elVideo.src = value.src;
    }
    // Native HLS Support
    else if (hasHLSSupport && value.isHLS) {
      elVideo.src = value.src;
    }
    // Native Dash Support
    else if (hasDashSupport && value.isDash) {
      elVideo.src = value.src;
    }
    // Use Hls.js API
    else if (value.isHLS) {
      hls.loadSource(value.src);
    }
    // use Dash.js
    else if (value.isDash) {
      //TODO: add
    }
    else {
      throw new Error('Unsupported video type', value);
    }
  }

  get elVideo() {
    return this.querySelector('video');
  }
}
export default ToutVideoPlayer;

// register the element to the interface.
customElements.define('tout-videoplayer', ToutVideoPlayer);
