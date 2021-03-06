/**
 * @module indicative-rules
 */

/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { SanitizationDefination } from 'indicative-compiler'
import { getValue, patchValue } from 'indicative-utils'
import { SanitizationRulesContract } from '../Contracts'

type LocaleArg = Parameters<SanitizationRulesContract['lowerCase']>[0]

/**
 * Converts the field value to lower case. Also, this sanitization rule
 * is locale aware.
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   hexCode: 'lower_case'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   hexCode: [
 *     sanitizations.lowerCase()
 *   ]
 * }
 * ```
 *
 * You may also specify a locale.
 *
 * ```ts
 * import { sanitizations } from 'indicative/sanitizer'
 *
 * const sanitizationRules = {
 *   label: 'lower_case:fr-CA'
 * }
 *
 * // or
 * const sanitizationRules = {
 *   label: [
 *     sanitizations.lowerCase(['fr-CA'])
 *   ]
 * }
 * ```
 */
const lowerCase: SanitizationDefination = {
  sanitize (data, field, args: LocaleArg | any[] = []) {
    let fieldValue = getValue(data, field)
    if (typeof (fieldValue) !== 'string') {
      return
    }

    patchValue(data, field, (fieldValue.toLocaleLowerCase as any)(args[0]))
  },
}

export { lowerCase as default }
