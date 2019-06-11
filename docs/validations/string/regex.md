---
permalink: regex
title: regex
category: validations
---

Ensures the value of field under validation, passes the regex test. The regex
can be defined as a string or a RegExp object.
 
NOTE: For complex `regex`, always use the `rule` method.
 
[source, js]
----
const rules = {
  age: [
    rule('regex', /[a-z]+/)
  ]
}
 
// or
const rules = {
  age: [
    rule('regex', new RegExp('[a-z]+'))
  ]
}
----