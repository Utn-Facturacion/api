const Sequelize = require('sequelize')

const person = require('../models/person')
const user = require('../models/user')

class Database {
  constructor (config, logger) {
    this.config = config
    this.logger = logger
    this.logger.verbose('Creating Sequelize instance')
    this.sequelize = new Sequelize(this.config.mariadb.url, {
      logging: false,
      dialectOptions: {
        timezone: 'Etc/GMT0'
      }
    })
    this.logger.verbose('Sequelize instance created')
    // this._setupMongoosePlugins()
    this._setupSequelizeModels()
  }

  connect (cb) {
    this.logger.verbose('Connecting to database')

    this.sequelize.authenticate()
      .then(() => {
        this.logger.verbose('Connected to database')
        cb(null)
      })
      .catch(err => cb(err))
  }

  disconnect (cb) {
    this.logger.verbose('Disconnecting from database')
    this.sequelize.close()
      .then(() => {
        this.logger.verbose('Disconnected from database')
        cb(null)
      })
      .catch((err) => cb(err))
  }

  model (...args) {
    return this.sequelize.model(...args)
  }

  _setupSequelizeModels () {
    this.logger.verbose('Registering models')
    this.sequelize.define('User', user)
    this.sequelize.define('Person', person)
    this.logger.verbose('Models registered')
  }

  // ping (cb) {
  //   if (!this.mongoose.connection.db) {
  //     return cb(new Error('Not connected to database'))
  //   }
  //   this.mongoose.connection.db.admin().ping((err, result) => {
  //     if (err) { return cb(err) }
  //     cb(null, result)
  //   })
  // }
}

module.exports = Database
