---
permalink: in
title: in
category: validations
---

Ensures the value of a given field matches one of expected values.
 
[source, js]
----
const rules = {
  post_type: 'in:draft,published'
}
 
// or
const rules = {
  post_type: [
    rule('in', ['draft', 'published'])
  ]
}
----