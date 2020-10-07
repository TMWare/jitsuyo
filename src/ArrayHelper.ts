/**
 * Check wether a *given* array includes all of the elements on *required*.
 * The *given* array may have more/otherwise different elements.
 * Intended for permission array overlap testing.
 * @param {Array} given An array to be tested against required
 * @param {Array} required An array that contains all elements that must be present on given
 * @return {Boolean} wether given includes all elements of required
 */
export function checkOverlap (given: Array<any>, required: Array<any>): boolean {
  if (!required) return true
  return required.every(e => given.includes(e))
}

export default { checkOverlap }
