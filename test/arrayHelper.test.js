const { appendFile } = require('fs')
const util = require('../dist/index')

describe('array overlap', () => {
  test('.checkOverlap should return true when given has all of required', () => {
    const given = [1, 2, 3, '4']
    const required = [2, 1, '4']
    const res = util.arrayHelper.checkOverlap(given, required)
    expect(res).toBe(true)
  })

  test('.checkOverlap should return false when given does not meet all required', () => {
    const given = [1, '2']
    const required = ['2', 3]
    const res = util.arrayHelper.checkOverlap(given, required)
    expect(res).toBe(false)
  })

  test('.checkOverlap should return false when given does not meet any required', () => {
    const given = [3]
    const required = [1, 2]
    const res = util.arrayHelper.checkOverlap(given, required)
    expect(res).toBe(false)
  })

  test('.checkOverlap should return true when required is empty', () => {
    const given = [2]
    const required = []
    const res = util.arrayHelper.checkOverlap(given, required)
    expect(res).toBe(true)
  })
})

describe('pickRandom', () => {
  test('.pickRandom should return undefined when no array / an empty one is provided', () => {
    const given2 = []
    const res1 = util.arrayHelper.pickRandom()
    const res2 = util.arrayHelper.pickRandom(given2)
    expect(res1).toBeUndefined()
    expect(res2).toBeUndefined()
  })

  test('.pickRandom should return the only element of a one-element array', () => {
    const given = ['Apples']
    expect(util.arrayHelper.pickRandom(given)).toBe('Apples')
  })

  test('.pickRandom should return one element of those given', () => {
    const given = ['Apple', 'Banana', 'Cherry']
    expect(util.arrayHelper.pickRandom(given)).toEqual(expect.stringMatching(/^(Apple)|(Banana)|(Cherry)/))
  })
})
