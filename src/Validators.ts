/* eslint-disable no-useless-escape */

/**
 * Validators for various strings
 */
class Validators {
  /**
   * RegExp for URL validation
   */
  public urlRegex: RegExp = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,24}\/([-a-zA-Z0-9()@:%._\+~#?&\/=]*)$/m
  /**
   * RegExp for Discord emoji name validation
   */
  public emojiRegex: RegExp = /^[\w]{2,32}$/m
  private readonly invalidName: string = 'invalid_name'

  /**
   * Validate a URL
   * @param {String} url URL to validate
   * @returns {Boolean} wether the given string is a valid url
   */
  public isUrl (url: string): boolean {
    return this.urlRegex.test(url ?? '')
  }

  /**
   * Validate an emoji name
   * @param {String} name name to validate
   * @returns {Boolean} wether the given string is a valid name for discord emojis
   */
  public isValidEmojiName (name: string): boolean {
    return this.emojiRegex.test(name ?? '')
  }

  /**
   * Get a name that's valid for discord emojis
   * @param {String} name name to try
   * @returns {String | "invalid_name"} The filtered name or a substitute
   */
  public getValidEmojiName (name: string): string {
    if (!name) return this.invalidName
    // Filter disallowed characters
    const emojiName = name.replace(/[^\w]/gi, '')
    if (!emojiName) return this.invalidName
    else if (!this.isValidEmojiName(emojiName)) return this.invalidName
    return emojiName
  }
}

export default new Validators()
