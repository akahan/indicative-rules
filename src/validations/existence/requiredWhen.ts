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
import { ValidationRulesContract } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['requiredWhen']>[0]

const MISSING_VALUES = 'requiredWhen:make sure to define target field and it\'s expected value'

/**
 * Enforces the field value to exist when the target field value matches the given
 * value. For example: Ask for `address` when value for `checkout_type=deliver`.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   address: 'required_when:checkout_type,deliver'
 * }
 *
 * // or
 * const rules = {
 *   address: [
 *     validations.requiredWhen(['checkout_type', 'deliver'])
 *   ]
 * }
 * ```
 *
 * You can also define an array of values to match from. For example: Ask for
 * the `county` when `country=Uk or US`.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   state: [
 *     validations.requiredWhen(['country', ['UK', 'US']])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUES, 2)
    return [String(args[0]), args[1]]
  },

  validate: (data, field, [targetField, expectedValues]: ComparisonArg) => {
    const targetFieldValue = getValue(data, targetField)

    if (empty(targetFieldValue)) {
      return true
    }

    /**
     * Ignore when expectedValues are array and none of the values matches
     * the value of the targeted field.
     */
    /* eslint eqeqeq: "off" */
    if (Array.isArray(expectedValues)) {
      if (!expectedValues.find((value) => targetFieldValue == value)) {
        return true
      }
    } else if (targetFieldValue != expectedValues) {
      return true
    }

    return !empty(getValue(data, field))
  },
}

export { validation as default }
