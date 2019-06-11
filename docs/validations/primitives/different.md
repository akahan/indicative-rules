---
permalink: different
title: different
category: validations
---

Ensures the value of the field under validation is always different from
the targeted field value.
 
[source, js]
----
const rules = {
  secondary_email: 'different:primary_email'
}
 
// or
const rules = {
  secondary_email: [
    rule('different', 'primary_email')
  ]
}
----