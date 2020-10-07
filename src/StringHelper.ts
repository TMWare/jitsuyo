const acronymRes = require('acronymresolver')

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

export default { escapeString, eliminateSpecial, resolveAcronym }
