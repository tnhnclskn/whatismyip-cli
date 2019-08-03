#!/usr/bin/env node

const ip = require('what-is-my-ip-address')
const isV6 = process.argv[2] === '-6'
const versionText = isV6 ? 'v6' : 'v4'

var ipVersion = null
if (isV6) {
  ipVersion = ip.v6()
} else {
  ipVersion = ip.v4()
}

ipVersion
  .then((ip) => {
    console.log(ip)
  })
  .catch(() => {
    console.error(`You don't have an IP${versionText} address.`)
    process.exit(1)
  })
