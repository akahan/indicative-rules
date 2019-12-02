'use strict'

/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import test from 'japa'
import * as validations from '../../src/validations'
import { RulesConfig } from '../../src/Contracts'

const config: RulesConfig = {
  existyStrict: true,
}

test.group('Validations | array', () => {
  test('return false when value is not a valid array', async (assert) => {
    const data = { users: 'foo' }
    const field = 'users'

    const args: any[] = []
    const root = { original: data, tip: data, pointer: '' }
    assert.isFalse(validations.array.validate(root, field, args, config))
  })

  test('work fine when value is a valid array', async (assert) => {
    const data = { users: ['doe', 'foo', 'bar'] }
    const field = 'users'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    const result = validations.array.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when value of field is an object', async (assert) => {
    const data = { users: { name: 'foo'} }
    const field = 'users'
    const root = { original: data, tip: data, pointer: '' }

    const args: any[] = []
    assert.isFalse(validations.array.validate(root, field, args, config))
  })
})
