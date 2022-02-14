import arrayHelper from './ArrayHelper'
import stringHelper from './StringHelper'
import validators from './Validators'

/**
 * All utility packaged
 * @property {ArrayHelper} arrayHelper
 * @property {StringHelper} stringHelper
 * @property {Validators} validators
 */
const util = {
  validators,
  arrayHelper,
  stringHelper
}

export default util
export {
  arrayHelper,
  stringHelper,
  validators
}

// // Allow use of default import syntax in TypeScript
// module.exports.default = util
