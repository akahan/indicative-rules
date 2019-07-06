---
permalink: isObject
title: isObject
category: raw
---

Returns a boolean telling if value is an object or not. `null` and `Arrays`
returns false.
 
```js
const { is } = require('indicative')
 
is.isObject({}) // true
is.isObject(null) // false
is.isObject([]) // false
```