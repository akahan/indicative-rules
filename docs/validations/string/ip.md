---
permalink: ip
title: ip
category: validations
---

Ensures the value is a valid ip address as per `ipv4` and `ipv6` specs.
 
[source, js]
----
const rules = {
  ip_address: 'ip'
}
 
// or
const rules = {
  ip_address: [
    rule('ip')
  ]
}
----