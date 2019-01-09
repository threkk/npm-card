#!/usr/bin/env node --harmony
// pkgs
const program = require('commander')

// local
const showCard = require('../lib/card')
const config = require('../lib/config.json')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .option('--json', 'JSON format')
  .parse(process.argv)

if (program.json) {
  console.log(JSON.stringify(config))
} else {
  showCard()
}

process.exit(0)
