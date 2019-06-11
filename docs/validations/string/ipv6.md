---
permalink: ipv6
title: ipv6
category: validations
---

Ensures the value is a valid ip address as per `ipv6` spec only.
 
[source, js]
----
const rules = {
  ip_address: 'ipv6'
}
 
// or
const rules = {
  ip_address: [
    rule('ipv6')
  ]
}
----