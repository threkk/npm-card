// Package imports.
const boxen = require('boxen')
const chalk = require('chalk')

// Local imports.
const config = require('./config.json')

const NEWLINE = '\n'
const EMPTY = ''
const OPTIONS = {
  padding: 1,
  margin: 1,
  borderStyle: 'double-single',
  borderColor: 'cyan'
}

function showCard () {
  const lines = [
    `${chalk.bold(config.name)} === ${chalk.inverse(config.nick)}`,
    `${chalk.blue(config.work)}`,
    EMPTY,
    `${chalk.green('Twitter:'.padStart(8))} ${chalk.white(config.twitter)}`,
    `${chalk.green('Github:'.padStart(8))} ${chalk.white(config.github)}`,
    `${chalk.green('Web:'.padStart(8))} ${chalk.white(config.web)}`,
    EMPTY,
    `Card: ${chalk.underline('npx threkk')}`
  ]

  console.log(boxen(lines.join(NEWLINE), OPTIONS))
}

module.exports = showCard
