import acronymRes from 'acronymresolver'

const spacingAndControl = /[\p{C}\p{Z}]/gu
const nonLetter = /([^\p{L}\p{Nd} ])/gu

/**
 * Escape special characters from a string
 * @param {String} input String to escape special characters from
 * @returns {String} the escaped string
 */
export function escapeString (input: string): string {
  if (!input) return ''
  // Replace zero-width characters with spaces
  input = input.replace(spacingAndControl, ' ')
  // Escape non-letter characters
  input = input.replace(nonLetter, '\\$1')
  return input
}

/**
 * Eliminate all but word characters
 * @param {String} input input string
 * @returns {String} string with only word characters
 */
export function eliminateSpecial (input: string): string {
  if (!input) return ''
  return input.replace(/[^\w]/g, '')
}

/**
 * Randomly resolve an acronym
 * @param {String} acronym an acronym (i.e. ABC which usually stands for American Broadcasting Company)
 * @returns {String} randomly resolver acronym
 * @example resolveAcronym('ABC')
 * // => 'Apartment Backing Consult'
 */
export function resolveAcronym (acronym: string): string {
  return acronymRes(eliminateSpecial(acronym).replace(/_/g, ''))
}

/**
 * Capitalize the first letter of a string
 * @param {String} string an input string
 * @returns {String} string with first letter capitalized
 * @example capitalizeFirstLetter('abc def GHI')
 * // => Abc def GHI
 */
export function capitalizeFirstLetter (string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Capitalize the first letter of every word in a string
 * @param {String} string an input string
 * @param {?String} wordSeparator string to split words by (default: ' ' (space))
 * @returns {String} string with all words capitalized
 * @example capitalize('abc def GHI')
 * // => Abc Def GHI
 *
 * @example capitalize('abc_def', '_')
 * // => Abc_Def
 */
export function capitalize (string: string, wordSeparator: string = ' '): string {
  return string
    .split(wordSeparator)
    .map(word => capitalizeFirstLetter(word))
    .join(wordSeparator)
}

export default { escapeString, eliminateSpecial, resolveAcronym, capitalizeFirstLetter, capitalize }
