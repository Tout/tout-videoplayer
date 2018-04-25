/**
 * Load MPEG-DASH support.
 */
export default function loadDash() {
  return fetch('https://cdn.dashjs.org/latest/dash.all.min.js', {
    method: 'GET',
  })
  .then((response) => response.text())
  .then((scriptDASH) => {
    // We get the MPEG-DASH script back as a string because we do not want to pollute the gloal any longer than we have to.
    // Using the function constructor gives us more control and protection.
    // eslint-disable-next-line no-new-func
    let dashjs = new Function(scriptDASH);
    // the Dash.js library will set on window.dashjs
    // so we need to make sure it can, and remove it after it's done.
    let existingDashjs = window.dashjs;
    // Run the script, allowing it to add to window
    dashjs();
    // Pull off the initiated MPEG-DASH library.
    dashjs = window.dashjs;
    // Restore whatever used to be on window.
    window.existingDashjs = existingDashjs;
    return dashjs;
  });
}
