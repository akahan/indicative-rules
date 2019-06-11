---
permalink: same
title: same
category: validations
---

Ensures the value of 2 fields are same.
 
[source, js]
----
const rules = {
  password_confirmation: 'same:password'
}
 
// or
const rules = {
  password_confirmation: [
    rule('same', ['password'])
  ]
}
----