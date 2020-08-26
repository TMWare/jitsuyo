class Validators {
  // eslint-disable-next-line no-useless-escape
  public urlRegex: RegExp = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,24}\/([-a-zA-Z0-9()@:%._\+~#?&//=]*)$/m
  public emojiRegex: RegExp = /^[\w]{2,32}$/m
  private invalidName: string = 'invalid_name'

  public isUrl (url: string): boolean {
    if (!url) return false
    return this.urlRegex.test(url)
  }

  public isValidEmojiName (name: string): boolean {
    if (!name) return false
    return this.emojiRegex.test(name)
  }

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
