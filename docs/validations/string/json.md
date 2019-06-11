---
permalink: json
title: json
category: validations
---

Ensures the value of field under validation is safe to be parsed
using `JSON.parse` method.
 
[source, js]
----
const rules = {
  payload: 'json'
}
 
// or
const rules = {
  payload: [
    rule('json')
  ]
}
----