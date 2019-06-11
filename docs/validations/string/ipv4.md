---
permalink: ipv4
title: ipv4
category: validations
---

Ensures the value is a valid ip address as per `ipv4` spec only.
 
[source, js]
----
const rules = {
  ip_address: 'ipv4'
}
 
// or
const rules = {
  ip_address: [
    rule('ipv4')
  ]
}
----