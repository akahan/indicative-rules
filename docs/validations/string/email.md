---
permalink: email
title: email
category: validations
---

Ensures the field under validation is a valid email format.
 
NOTE: This validation never checks for the existence of the email address.
 
[source, js]
----
const rules = {
  email: 'email'
}
 
// or
const rules = {
  email: [
    rule('email')
  ]
}
----