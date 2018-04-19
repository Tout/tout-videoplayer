import 'document-register-element';
import { hyper } from 'hyperhtml/esm';

import childrenToSourceList from './util/childrenToSourceList.js';
import loadHLS from './util/loadHLS.js';
console.log('Hello World');

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
    const { sources } = this;
    // Rendering the content with hyperHTML.
    this.hyperHTML`<div>
      <video controls>
        ${sources.map((source) => {
          return hyper.wire(source)`
            <source
             src=${source.src}
             type=${source.type}
           >`;
        })}
      </video>
    </div>`;
  }

  /**
   * Triggered when the component is mounted on a DOM.
   * Renders/Updates the element.
   */
  connectedCallback() {
    console.log('connectedCallback', this);
    // Convert any child <source> elements into our source list.
    this._sourceList = childrenToSourceList(this.children);
    // if a source contains HLS, and the browser does not support it, load support.
    //TODO: check if all the sources require hls
    if (!this.supportsHLS) {
      loadHLS().then((Hls) => {
        const elVideo = this.querySelector('video');
        const hls = new Hls();
        const src = this._sourceList.find(i => i.type === 'application/x-mpegURL');
        hls.loadSource(src.src);
        hls.attachMedia(elVideo);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          //TODO: check if we should autoplay
          elVideo.play();
        });
      });
    }

    this.render();
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
    const { src, _sourceList } = this;

    // if we have a source list, use it.
    if (_sourceList.length > 0) {
      return _sourceList;
    }
    // else fallback to the src attribute.
    return [{
      src,
      type: 'video/mp4',
    }]
  }

  /**
   * Returns True if the browser supports HLS playback.
   */
  get supportsHLS() {
    const elVideo = document.createElement('video');
    return elVideo.canPlayType('application/x-mpegURL') !== '';
  }
}
export default ToutVideoPlayer;

// register the element to the interface.
customElements.define('tout-videoplayer', ToutVideoPlayer);
