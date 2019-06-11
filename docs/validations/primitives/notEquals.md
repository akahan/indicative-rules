---
permalink: notEquals
title: notEquals
category: validations
---

Makes sure that the value of field under validation is not
same as the defined value.
 
[source, js]
----
const rules = {
  username: 'not_equals:root'
}
 
// or
const rules = {
  username: [
    rule('not_equals', 'root')
  ]
}
----