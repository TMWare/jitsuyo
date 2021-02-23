const util = require('../dist/index')

describe('url validator', () => {
  test('.isUrl should return true on valid url', () => {
    const res = util.validators.isUrl('http://discord.com/')
    expect(res).toBe(true)
  })

  test('.isUrl should return false on invalid url', () => {
    const res = util.validators.isUrl('http:/discord.com/')
    expect(res).toBe(false)
  })

  test('.isUrl should return false on no url', () => {
    const res1 = util.validators.isUrl()
    const res2 = util.validators.isUrl('')
    expect(res1).toBe(false)
    expect(res2).toBe(false)
  })
})

describe('emoji name validator', () => {
  test('.isValidEmojiName should return true on valid name', () => {
    const res = util.validators.isValidEmojiName('someName')
    expect(res).toBe(true)
  })

  test('.getValidEmojiName should return filtered name', () => {
    const res = util.validators.getValidEmojiName('Another Name')
    expect(res).toBe('AnotherName')
  })

  test('.getValidEmojiName should return "invalid_name" when no valid characters are found', () => {
    const res = util.validators.getValidEmojiName('-- --')
    expect(res).toBe('invalid_name')
  })

  test('.getValidEmojiName should return "invalid_name" when the name does not meet length requirements', () => {
    const tooShort = util.validators.getValidEmojiName('a')
    const tooLong = util.validators.getValidEmojiName('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    expect(tooShort).toBe('invalid_name')
    expect(tooLong).toBe('invalid_name')
  })

  test('.isValidEmojiName should return false on no name', () => {
    const res1 = util.validators.isValidEmojiName()
    const res2 = util.validators.isValidEmojiName('')
    expect(res1).toBe(false)
    expect(res2).toBe(false)
  })

  test('.getValidEmojiName should return "invalid_name" on no name', () => {
    const res1 = util.validators.getValidEmojiName()
    const res2 = util.validators.getValidEmojiName('')
    expect(res1).toBe('invalid_name')
    expect(res2).toBe('invalid_name')
  })
})
