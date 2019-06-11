---
permalink: startsWith
title: startsWith
category: validations
---

Ensure the value of field under validation starts with a certain substr. This
validation will also trim whitespaces before making the check
 
[source, js]
----
const rules = {
  phone_no: 'starts_with:99'
}
 
// or
const rules = {
  phone_no: [
    rule('starts_with', '99')
  ]
}
----