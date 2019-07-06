---
permalink: escape
title: escape
category: sanitizations
---

Escapes HTML entities. Useful when you want to avoid XSS attacks.
 
This method will only remove `&`, `"`, `'`, `<` and `>` characters. For advance escaping
make use of a 3rd party library like [he](https://github.com/mathiasbynens/he).
 
```ts
import { sanitizations } from 'indicative/sanitizer'
 
const sanitizationRules = {
  message: 'escape'
}
 
// or
const sanitizationRules = {
  message: [
    sanitizations.escape()
  ]
}
```