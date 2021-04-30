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
    expect(res).toBe(
      '\\,\\.\\/\\;\\\'\\[\\]\\\\\\-\\=\\<\\>\\?\\:\\"\\{\\}\\|\\_\\+\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\`\\~'
    )
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

expect.extend({
  arrayElementsStartWith(received, startWithA, startWithB) {
    const pass = received.every(e => e.startsWith(startWithA) || e.startsWith(startWithB))
    if (pass) {
      return {
        message: () => `expected ${received} not to start with either ${startWithA} or ${startWithB}`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${received} to start with either ${startWithA} or ${startWithB}`,
        pass: false
      }
    }
  }
})

describe('acronym resolving', () => {
  test('.resolveAcronym results should never include special characters aside from regular whitespace', () => {
    const res = util.stringHelper.resolveAcronym('\u0000\u000a\u000d\u200a\u200b\u200c')
    expect(res).toBe('')
  })

  test('.resolveAcronym should resolve characters to words starting with the original characters', () => {
    const res = util.stringHelper.resolveAcronym('AB')
    expect(res.split(' ')).arrayElementsStartWith('A', 'B')
  })

  test('.resolveAcronym should return an empty string when no input is passed', () => {
    expect(util.stringHelper.resolveAcronym()).toBe('')
  })
})

describe('string capitalization', () => {
  test('.capitalizeFirstLetter should capitalize the first letter', () => {
    expect(util.stringHelper.capitalizeFirstLetter('abc def')).toBe('Abc def')
  })
  test('.capitalizeFirstLetter should not lowercase', () => {
    expect(util.stringHelper.capitalizeFirstLetter('ABC DEF')).toBe('ABC DEF')
  })
  test('.capitalizeFirstLetter should only capitalize word characters', () => {
    expect(util.stringHelper.capitalizeFirstLetter(' ab')).toBe(' ab')
    expect(util.stringHelper.capitalizeFirstLetter('/ab')).toBe('/ab')
  })

  test('.capitalize should capitalize the first letter of every word', () => {
    expect(util.stringHelper.capitalize('abc def')).toBe('Abc Def')
  })
  test('.capitalize should accept custom separators', () => {
    expect(util.stringHelper.capitalize('abc_def', '_')).toBe('Abc_Def')
  })
  test('.capitalize should not lowercase', () => {
    expect(util.stringHelper.capitalize('ABC DEF')).toBe('ABC DEF')
  })
})
