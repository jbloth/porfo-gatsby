/**
 * @description Sets startOffset of text path depending on the position of the svg's enclosing
 *  div in the viewport. To be used in useEffect and onScroll-function
 * @param {ref object} refContainer Reference to the container dom node
 * @param {ref object} refTarget Reference to the texpath dom node
 * @param {number} initialOffset  Initial text offset for text path
 * @param {number} factor  Controls the animation velocity
 * @param {boolean} backwards  Controls the animation direction
 */
export const setStartOffset = (
  refContainer,
  refTarget,
  initialOffset,
  factor,
  backwards
) => {
  const topY = refContainer.current.getBoundingClientRect().top;
  const bottomY = refContainer.current.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight; // window height
  const height = refContainer.current.clientHeight; // height of container div

  if (topY >= 0 - height && topY <= windowHeight) {
    const offset = backwards
      ? initialOffset -
        Math.floor(
          ((windowHeight + height - bottomY) / (windowHeight + height)) * factor
        )
      : initialOffset +
        Math.floor(
          ((windowHeight + height - bottomY) / (windowHeight + height)) * factor
        );
    refTarget.current.setAttribute("startOffset", `${offset}%`);
  }
};
