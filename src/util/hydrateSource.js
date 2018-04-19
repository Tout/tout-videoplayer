import sourceTypeFromFileName from './sourceTypeFromFileName.js';

/**
 * Turns a source like object into a full source object
 * @param  {Any} source - an object with `src` and optionally `type`
 * @return {Object} A full source object.
 */
export default function hydrateSource(source) {
  const { src } = source;
  let { type } = source;

  // if there is no type, try and figure it out
  if (!type) {
    type = sourceTypeFromFileName(src);
  }

  // Return the new source object.
  return {
    src,
    type,
  };
}
