const util = require('../dist/index')

describe('character escaping', () => {
  test('.escapeString should replace invisible white-space characters with regular spaces', () => {
    const res = util.stringHelper.escapeString('\u0000\u000a\u000d\u200a\u200b\u200c')
    expect(res).toBe('      ')
  })

  test('.escapeString should return an empty string when no input is passed', () => {
    expect(util.stringHelper.escapeString()).toBe('')
  })

  test('.escapeString should escape non-letter characters', () => {
    const res = util.stringHelper.escapeString(',./;\'[]\\-=<>?:"{}|_+!@#$%^&*()`~')
    expect(res).toBe('\\,\\.\\/\\;\\\'\\[\\]\\\\\\-\\=\\<\\>\\?\\:\\"\\{\\}\\|\\_\\+\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\`\\~')
  })
})

describe('character elimination', () => {
  test('.eliminateSpecial should leave only [a-zA-Z0-9_] alive', () => {
    const res = util.stringHelper.eliminateSpecial('\u0000\u000a\u000d\u200a\u200b\u200chello WORLD1_')
    expect(res).toBe('helloWORLD1_')
  })

  test('.eliminateSpecial should return an empty string when no input is passed', () => {
    expect(util.stringHelper.eliminateSpecial()).toBe('')
  })

  test('.eliminateSpecial should leave no special characters except _', () => {
    const res = util.stringHelper.eliminateSpecial(',./;\'[]\\-=<>?:"{}|_+!@#$%^&*()`~')
    expect(res).toBe('_')
  })
})
