/**
 * Validators for various types of strings
 */
interface Validators {
  /**
   * RegExp for URL validation
   */
  urlRegex: RegExp
  /**
   * RegExp for Discord emoji name validation
   */
  emojiRegex: RegExp
  invalidName: string
  /**
   * Validate a URL
   * @param {String} url URL to validate
   * @returns {Boolean} wether the given string is a valid url
   */
  isUrl(url: string): boolean
  /**
   * Validate an emoji name
   * @param {String} name name to validate
   * @returns {Boolean} wether the given string is a valid name for discord emojis
   */
  isValidEmojiName(name: string): boolean
  /**
   * Get a name that's valid for discord emojis
   * @param {String} name name to try
   * @returns {String | "invalid_name"} The filtered name or a substitute
   */
  getValidEmojiName(name: string): string
}

interface Jitsuyo {
  validators: Validators
}

/**
 * All utility packaged
 */
declare const util: Jitsuyo

export = util
