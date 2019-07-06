---
permalink: startsWith
title: startsWith
category: string
---

Ensure the value of field under validation starts with a certain substr. This
validation will also trim whitespaces before making the check
 
```ts
import { validations } from 'indicative/validator'
 
const rules = {
  phone_no: 'starts_with:99'
}
 
// or
const rules = {
  phone_no: [
    validations.startsWith(['99'])
  ]
}
```