import loadHLS from './loadHLS.js';

/**
 * Loads 3rd party libary to support one of the sources in the sourceList.
 * Will load a 3rd party library before using an MP4 source.
 * @param  {Boolean} hasHLSSupport - if true, will not load hls.js
 * @param  {Boolean} hasDashSupport - if true, will not load dash.js
 * @param  {Array}  sourceList - Array of sources to use.
 * @return {Promise}
 */
export default function loadExternalSupport(hasHLSSupport, hasDashSupport, sourceList) {
  const needHLS = sourceList.find(i => i.type === 'application/x-mpegURL');
  const needDash = sourceList.find(i => i.type === 'application/dash+xml');
  const hasMP4 = sourceList.find(i => i.type === 'video/mp4');

  return new Promise(function(resolve, reject) {
    // HLS has mobile support, so it gets priority.
    if (needHLS && hasHLSSupport) {
      console.log('native HLS', needHLS);
      return resolve(needHLS);
    }
    // Use Dash if it's supported.
    else if (needDash && hasDashSupport) {
      console.log('native Dash', needDash);
      return resolve(needDash);
    }
    // Load HLS support
    else if (needHLS && !hasHLSSupport) {
      console.log('load HLS', needHLS);
      return resolve(loadHLS(), needHLS);
    }
    // Load Dash supprt
    else if (needDash && !hasDashSupport) {
      //TODO: add
      console.log('load Dash', needDash);
      return resolve(null);
    }
    // all else fails use mp4
    console.log('fallback to MP4');
    return resolve(hasMP4);
  });
}
