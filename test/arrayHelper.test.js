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
    const given = []
    const required = []
    const res = util.arrayHelper.checkOverlap(given, required)
    expect(res).toBe(true)
  })
})
