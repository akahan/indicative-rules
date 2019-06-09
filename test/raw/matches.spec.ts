'use strict'

/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import * as test from 'japa'
import * as Is from '../../src/raw'

test.group('raw | regex', () => {
  test('execute custom regex', (assert) => {
    assert.isTrue(Is.matches('virk', /[a-z]/))
  })
})
