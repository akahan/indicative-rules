---
permalink: accepted
title: accepted
category: validations
---

Ensures that the field under validation is accepted.
Empty strings, `false`, `null`, `0` and undefined
values will be considered as not accepted.
 
[source, js]
----
const rules = {
  terms: 'accepted'
}
 
// or
const rules = {
  terms: [
    rule('accepted')
  ]
}
----