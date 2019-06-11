---
permalink: endsWith
title: endsWith
category: validations
---

Ensure the value of field under validation ends with a certain substr. This
validation will also trim whitespaces before making the check
 
[source, js]
----
const rules = {
  reg_no: 'ends_with:qaw'
}
 
// or
const rules = {
  reg_no: [
    rule('ends_with', 'qaw')
  ]
}
----