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

test.group('Validations | requiredWithAll', () => {
  test('throw exception when with fields are missing', async (assert) => {
    const args = []
    const fn = () => validations.requiredWithAll.compile!(args)
    assert.throw(fn, 'requiredWithAll:make sure to define one or more target fields')
  })

  test('return args when with fields are defined', async (assert) => {
    const args = ['username', 'email']
    assert.deepEqual(validations.requiredWithAll.compile!(args), args)
  })

  test('work fine when none of the targeted fields are present', async (assert) => {
    const data = {}
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithAll.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('return false when all targeted fields are present but actual is missing', async (assert) => {
    const data = { username: 'foo', 'email': 'foo@bar.com' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    assert.isFalse(validations.requiredWithAll.validate(root, field, args, config))
  })

  test('return false when all targeted fields are present but actual field value is null', async (assert) => {
    const data = { username: 'foo', email: 'foo@bar.com', password: null }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    assert.isFalse(validations.requiredWithAll.validate(root, field, args, config))
  })

  test('work fine when all the targeted fields and actual field is defined', async (assert) => {
    const data = { username: 'foo', password: 'bar', 'email': 'foo@bar.com' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithAll.validate(root, field, args, config)
    assert.isTrue(result)
  })

  test('work fine when targeted fields and actual field are missing', async (assert) => {
    const data = { username: 'foo' }
    const root = { original: data, tip: data, pointer: '' }
    const field = 'password'

    const args = ['username', 'email']
    const result = validations.requiredWithAll.validate(root, field, args, config)
    assert.isTrue(result)
  })
})
