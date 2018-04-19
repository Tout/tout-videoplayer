/**
 * Sets `isHLS`, `isDash`, and `isMP4` flags on the source object.
 * @param {[type]} source [description]
 */
export default function setSourceType(source) {
  source.isHLS = source.type === 'application/x-mpegURL';
  source.isDash = source.type === 'application/dash+xml';
  source.isMP4 = source.type === 'video/mp4';
  return source;
}
