/// <reference path="../index.d.ts" />

import validators from './Validators'
import arrayHelper from './ArrayHelper'

/**
 * All utility packaged
 */
const util = {
  validators,
  arrayHelper
}

module.exports = util
// // Allow use of default import syntax in TypeScript
// module.exports.default = util
