const async = require('async')
const Server = require('./server')
const Database = require('./database')

class Api {
  constructor (config, logger) {
    this.config = config
    this.logger = logger
    this.isRunning = false
    this.database = new Database(this.config, this.logger)
    this.server = new Server(this.config, this.logger, this.database)
  }

  start (cb) {
    if (this.isRunning) {
      throw new Error('Cannot start api-facturacion because it is already running')
    }

    this.isRunning = true

    this.logger.verbose('Starting api-facturacion')
    this.logger.verbose('Compiling Vault secrets into config')

    async.parallel([
      cb => this.database.connect(cb),
      cb => this.server.listen(cb)
    ], (err) => {
      if (err) { return cb(err) }

      this.logger.verbose('api-facturacion ready and awaiting requests')
      cb(null)
    })
  }

  stop (cb) {
    if (!this.isRunning) {
      throw new Error('Cannot stop api-facturacion because it is already stopping')
    }
    this.isRunning = false

    this.logger.verbose('Stopping api-facturacion')
    async.parallel([
      cb => this.database.disconnect(cb),
      cb => this.server.close(cb)
    ], (err) => {
      if (err) { return cb(err) }

      this.logger.verbose('api-facturacion has closed all connections and successfully halted')
      cb(null)
    })
  }
}

module.exports = Api
