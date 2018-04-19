import 'document-register-element';
import { hyper } from 'hyperhtml/esm';

import childrenToSourceList from './util/childrenToSourceList.js';
import loadExternalSupport from './util/loadExternalSupport.js';
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
    const { currentSrc } = this;
    // Rendering the content with hyperHTML.
    this.hyperHTML`<div>
      <video controls></video>
    </div>`;

    // load the source based on the source type.
    // const elVideo = this.querySelector('video');

    // this.hyperHTML`<div>
    //   <video controls>
    //     ${sources.map((source) => {
    //       return hyper.wire(source)`
    //         <source
    //          src=${source.src}
    //          type=${source.type}
    //        >`;
    //     })}
    //   </video>
    // </div>`;
  }

  /**
   * Triggered when the component is mounted on a DOM.
   * Renders/Updates the element.
   */
  connectedCallback() {
    console.log('connectedCallback', this);
    // this.children is an HTMLCollection which is live.
    // So we need to make a copy before we call render.
    const children = Array.from(this.children);
    // Render first so if there are any sources specified we can start loading.
    this.render();
    // Convert any child <source> elements into our source list.
    // then set the source type helper properties
    this.sourceList = childrenToSourceList(children)
      .map(setSourceType);
    // Load any 3rd party support libraries we might need.
    // loadExternalSupport(this.hasHLSSupport, this.hasDashSupport, this._sourceList)
    //   .then(function() {
    //     console.log('Use support library', arguments);
    //   })
    //   .catch(() => {
    //     debugger;
    //   });
    // if a source contains HLS, and the browser does not support it, load support.
    //TODO: check if all the sources require hls
    // if (!this.supportsHLS) {
      // loadHLS().then((Hls) => {
      //   const elVideo = this.querySelector('video');
      //   const hls = new Hls();
      //   const src = this._sourceList.find(i => i.type === 'application/x-mpegURL');
      //   hls.loadSource(src.src);
      //   hls.attachMedia(elVideo);
      //   hls.on(Hls.Events.MANIFEST_PARSED, () => {
      //     //TODO: check if we should autoplay
      //     elVideo.play();
      //   });
      // });
    // }

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
  handleEvent(event) {
    const { type, target } = event;

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
    console.log('set sourceList', value);
    if (!value || value.length === 0) { return; }
    const { hasHLSSupport, hasDashSupport } = this;
    const source = findBestSource(hasHLSSupport, hasDashSupport, value);
    // Load any 3rd party support libraries we might need.
    if (source.isHLS && !hasHLSSupport) {
      // Load HLS Support
      loadHLS().then((Hls) => {
        console.log('loaded HLS support');
        this.hls = new Hls();
        this.hls.attachMedia(this.elVideo);
        this.srcObject = source;
      });
    }
    else if (source.isDash && !hasDashSupport) {
      // Load Dash Support
      // trigger loadstart event
      console.log('load Dash support');
      // trigger loadend event
    }
    else {
      // We are supported!
      console.log('use like normal');
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
  // get srcObject() {
  //   const { sources } = this;
  //   // if there is only one souce, no need to check
  //   if (sources.length === 1) { return sources[0]; }
  //   //TODO: return the correct source object
  // }
  get srcObject() {
    return this._currentSrc;
  }
  /**
   * Setting srcObject will start loading the video.
   * This replicated standard DOM behaviour where the async call starts when setting src/srcObject
   * @param  {Object} value
   */
  set srcObject(value) {
    console.log('set srcObject', value);
    const { elVideo, hasHLSSupport, hls, hasDashSupport } = this;
    //TODO: Setting the source should start loading just like it does for other HTML elements.
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
