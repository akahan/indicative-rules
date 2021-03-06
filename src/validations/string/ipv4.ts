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

import { ipv4 } from '../../raw/ipv4'
import { RulesConfig } from '../../Contracts'

/**
 * Enforces the field value is a valid `ipv4` address.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   ip_address: 'ipv4'
 * }
 *
 * // or
 * const rules = {
 *   ip_address: [
 *     validations.ipv4()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || ipv4(fieldValue)
  },
}

export { validation as default }
