#!/usr/bin/env node

var ip = require('what-is-my-ip-address')

var ipVersion = null
if (process.argv[2] === '-6') {
  ipVersion = ip.v6()
} else {
  ipVersion = ip.v4()
}

ipVersion
  .then((ip) => {
    console.log(ip)
  })
  .catch(() => {
    console.error(`You don't have a ip address.`)
    process.exit(1)
  })
