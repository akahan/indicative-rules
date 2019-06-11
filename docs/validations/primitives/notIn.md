---
permalink: notIn
title: notIn
category: validations
---

Makes sure that the value of field under validation is not
from one of the defined values.
 
[source, js]
----
const rules = {
  username: 'not_in:root,admin,super'
}
 
// or
const rules = {
  username: [
    rule('not_in', ['root', 'admin', 'super'])
  ]
}
----