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
import * as Is from '../../src/raw'

test.group('raw | negative', () => {
  test('return true when input is less than 0', (assert) => {
    assert.isTrue(Is.negative(-42))
  })

  test('return false when input is greater than 0', (assert) => {
    assert.isFalse(Is.negative(42))
  })
})
