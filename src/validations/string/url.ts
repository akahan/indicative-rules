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

import { url } from '../../raw/url'
import { RulesConfig } from '../../Contracts'

/**
 * Ensures the value is a valid URL format.
 *
 * [source, js]
 * ----
 * const rules = {
 *   gh_profile: 'url'
 * }
 *
 * // or
 * const rules = {
 *   gh_profile: [
 *     rule('url')
 *   ]
 * }
 * ----
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || url(fieldValue)
  },
}

export { validation as default }