#! /usr/bin/env node

const process = require('node:process')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { startApp } = require('./app.js')


if (argv.toggle) {
  const dgram = require('dgram')
  const client = dgram.createSocket('udp4');
  client.send("OTO0", 0, 4, 8467, '127.0.0.1', () => {
    client.close()
    process.exit(0)
  })
} else {
  setTimeout(startApp, 2000);
}