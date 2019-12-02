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

test.group('raw | ipv4', () => {
  test('return true when is a valid ipv4 address ', (assert) => {
    assert.isTrue(Is.ipv4('127.0.0.1'))
  })

  test('return false when is not a valid ipv4 ip address ', (assert) => {
    assert.isFalse(Is.ipv4('1:2:3:4:5:6:7:8'))
  })
})
