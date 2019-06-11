---
permalink: substring
title: substring
category: validations
---

Ensures the value of field under validation contains a given substring.
 
[source, js]
----
const rules = {
  url: 'includes:adonisjs.com'
}
 
// or
const rules = {
  url: [
    rule('includes', ['adonisjs.com'])
  ]
}
----