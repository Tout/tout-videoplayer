
/**
 * Returns the best source object to load based on browser support.
 * @param  {Array} sourceList
 * @return {Object}
 */
export default function findBestSource(hasHLSSupport, hasDashSupport, sourceList) {
  const sourceHLS = sourceList.find(i => i.isHLS);
  const sourceDash = sourceList.find(i => i.isDash);
  const sourceMP4 = sourceList.find(i => i.isMP4);

  // HLS has mobile support, so it gets priority.
  if (hasHLSSupport && sourceHLS) {
    return sourceHLS;
  }
  // Use Dash if it's supported.
  else if (hasDashSupport && sourceDash) {
    return sourceDash;
  }
  // Load HLS support before picking anything else
  else if (sourceHLS) {
    return sourceHLS;
  }
  // Load Dash support before falling back to mp4
  else if (sourceDash) {
    return sourceDash;
  }
  // all else fails use mp4
  return sourceMP4;
}
