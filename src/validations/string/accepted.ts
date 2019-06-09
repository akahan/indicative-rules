/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { truthy } from '../../raw/truthy'
import { RulesConfig } from '../../Contracts'

/**
 * Ensures that the field under validation is accepted.
 * Empty strings, `false`, `null`, `0` and undefined
 * values will be considered as not accepted.
 *
 * [source, js]
 * ----
 * const rules = {
 *   terms: 'accepted'
 * }
 *
 * // or
 * const rules = {
 *   terms: [
 *     rule('accepted')
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || truthy(fieldValue)
  },
}

export { validation as default }