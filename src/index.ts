/// <reference path="../index.d.ts" />

import ArrayHelper from './ArrayHelper'
import StringHelper from './StringHelper'
import Validators from './Validators'

/**
 * All utility packaged
 * @property {ArrayHelper} arrayHelper
 * @property {StringHelper} stringHelper
 * @property {Validators} validators
 */
const util = {
  validators: Validators,
  arrayHelper: ArrayHelper,
  stringHelper: StringHelper
}

module.exports = util
// // Allow use of default import syntax in TypeScript
// module.exports.default = util
