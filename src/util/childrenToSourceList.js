/**
 * Converts an HTMLCollection of <source> elements into an array of source objects.
 * https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
 * @param  {HTMLCollection} children
 * @return {Array}
 */
export default function childrenToSourceList(children) {
  return Array.from(children).reduce((acc, elm) => {
    if (elm.nodeName !== 'SOURCE') { return acc; }
    const { src, type } = elm;

    acc.push({
      src,
      type,
    });
    return acc;
  }, []);
}
