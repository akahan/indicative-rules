---
permalink: under
title: under
category: number
---

Ensures the value provided by the end user is above the
expected value.
 
Make sure to cast the user input value to `number` before using this
rule by using `number` rule.
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  age: 'under:60'
}
 
// or
const rules = {
  age: [
    validations.under(60)
  ]
}
```