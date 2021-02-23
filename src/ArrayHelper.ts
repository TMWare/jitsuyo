/**
 * Check wether a *given* array includes all of the elements on *required*.
 * The *given* array may have more/otherwise different elements.
 * Intended for permission array overlap testing.
 * @param {Array} given An array to be tested against required
 * @param {Array} required An array that contains all elements that must be present on given
 * @return {Boolean} wether given includes all elements of required
 */
export function checkOverlap (given: any[], required: any[]): boolean {
  if (!required) return true
  return required.every(e => given.includes(e))
}

/**
 * Pick one random element out of an array and return it.
 *
 * Will return undefined when the array has no elements
 * @param {Array<T>} array Arbitrary Array
 * @returns {T} the selected element
 */
export function pickRandom<T> (array: T[]): T | undefined {
  if (!Array.isArray(array) || !array) return
  else if (array.length === 1) return array[0]

  return array[Math.floor(Math.random() * array.length)]
}

export default { checkOverlap, pickRandom }
