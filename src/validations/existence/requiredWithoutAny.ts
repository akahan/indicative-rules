/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ensureLength, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { empty } from '../../raw/empty'
import { existy } from '../../raw/existy'
import { ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['requiredWithoutAny']>[0]

const MISSING_VALUES = 'requiredWithoutAny:make sure to define one or more target fields'

/**
 * Enforces the field value to exist when any of the expected fields are
 * missing.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   email: 'required_without_any:username,account_id'
 * }
 *
 * // or
 * const rules = {
 *   email: [
 *     validations.requiredWithoutAny(['username', 'account_id'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUES, 1)
    return args.map((arg) => String(arg))
  },

  validate: (data, field, args: ComparisonArg) => {
    const missingField = args.some((item) => !existy(getValue(data, item)))
    if (missingField) {
      return !empty(getValue(data, field))
    }

    return true
  },
}

export { validation as default }
