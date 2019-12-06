const chalk = require('chalk')
const winston = require('winston')
const config = require('config')

// const config = require('../config')

const transports = []
const format = winston.format

if (config.has('logger.console')) {
  transports.push(new winston.transports.Console(config.get('logger.console')))
}

const logger = winston.createLogger({
  transports,
  format: format.combine(
    format.splat(),
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(info => {
      const endpoint = info.method ? `\t[${chalk.blueBright(info.method)} ${info.url}]` : ''
      const error = info.originalError ? `(${info.code}) ${info.originalError.message}` : ''
      const meta = info.statusCode ? `> ${info.statusCode} ${info.duration}` : ''
      return `${chalk.gray(info.timestamp)} ${info.level}${endpoint} ${info.message} ${error} ${meta}`
    })
  )
})

module.exports = logger
