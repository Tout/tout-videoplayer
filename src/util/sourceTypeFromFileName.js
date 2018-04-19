import MIME from '../const/MIME.js';

/**
 * Returns the MIME Type based on file extention.
 * @param  {String} filename
 * @return {String}
 */
export default function sourceTypeFromFileName(filename) {
  if (filename.endsWith('.m3u8')) {
    return MIME.HLS;
  }
  else if (filename.endsWith('.mp4')) {
    return MIME.MP4;
  }
  else if (filename.endsWith('.mpd')) {
    return MIME.DASH;
  }
  // unknown type
  return '';
}
