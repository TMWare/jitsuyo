/// <reference path="../index.d.ts" />

import validators from './Validators'
import arrayHelper from './ArrayHelper'
import stringHelper from './StringHelper'

/**
 * All utility packaged
 */
const util = {
  validators,
  arrayHelper,
  stringHelper
}

module.exports = util
// // Allow use of default import syntax in TypeScript
// module.exports.default = util
