---
permalink: alphaNumeric
title: alphaNumeric
category: validations
---

Makes sure the field under validation is alpha numeric only.
The regex used is `/^[a-z0-9]+$/i`.
 
[source, js]
----
const rules = {
  username: 'alpha_numeric'
}
 
// or
const rules = {
  username: [
    rule('alpha_numeric')
  ]
}
----