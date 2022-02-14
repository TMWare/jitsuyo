/* eslint-disable no-useless-escape */

/**
 * RegExp for URL validation
 */
export const URL_REGEX: RegExp = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,24}\/([-a-zA-Z0-9()@:%._\+~#?&\/=]*)$/m
/**
 * RegExp for Discord emoji name validation
 */
export const EMOJI_REGEX: RegExp = /^[\w]{2,32}$/m
export const INVALID_EMOJI_NAME: string = 'invalid_name'

/**
 * Validate a URL
 * @param {String} url URL to validate
 * @returns {Boolean} wether the given string is a valid url
 */
export function isUrl (url: string): boolean {
  return URL_REGEX.test(url ?? '')
}

/**
 * Validate an emoji name
 * @param {String} name name to validate
 * @returns {Boolean} wether the given string is a valid name for discord emojis
 */
export function isValidEmojiName (name: string): boolean {
  return EMOJI_REGEX.test(name ?? '')
}

/**
 * Get a name that's valid for discord emojis
 * @param {String} name name to try
 * @returns {String | "invalid_name"} The filtered name or a substitute
 */
export function getValidEmojiName (name: string): string {
  if (!name) return INVALID_EMOJI_NAME
  // Filter disallowed characters
  const emojiName = name.replace(/[^\w]/gi, '')
  if (!emojiName) return INVALID_EMOJI_NAME
  else if (!isValidEmojiName(emojiName)) return INVALID_EMOJI_NAME
  return emojiName
}

export default {
  isValidEmojiName,
  getValidEmojiName,
  isUrl,
  invalidName: INVALID_EMOJI_NAME,
  emojiRegex: EMOJI_REGEX,
  urlRegex: URL_REGEX
}
