/**
 * Load HLS support.
 * @return {Promise} then(Hls) returns the Hls class.
 */
export default function loadHLS() {
  //QUESTION: If window.Hls exists on the page, should we use it instead of loading our own support?
  //        : The risk is that something would be incompatable, and the playback would fail.
  //        : Also, the browser will de-dupe and cache, so the cost is re-evaling the HLS script.
  return fetch('https://cdn.jsdelivr.net/npm/hls.js@latest', {
    method: 'GET',
  })
    .then((response) => response.text())
    .then((scriptHLS) => {
      // We get the HLS script back as a string because we do not want to pollute the gloal any longer than we have to.
      // Using the function constructor gives us more control and protection.
      // eslint-disable-next-line no-new-func
      let Hls = new Function(scriptHLS);
      // the HLS library will set on window.Hls
      // so we need to make sure it can, and remove it after it's done.
      let existingHls = window.Hls;
      // Run the script, allowing it to add to window
      Hls();
      // Pull off the initiated Hls library.
      Hls = window.Hls;
      // Restore whatever used to be on window.
      window.Hls = existingHls;
      return Hls;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('fetch error', err);
    });
}
