const Sequelize = require('sequelize')

class Database {
  constructor (config, logger) {
    this.config = config
    this.logger = logger
    this.logger.verbose('Creating Sequelize instance')
    this.sequelize = new Sequelize(this.config.mariadb.url, { logging: false })
    this.logger.verbose('Sequelize instance created')

    // this._setupMongoosePlugins()
    // this._setupMongooseModels()
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

  // model (...args) {
  //   return this.mongoose.model(...args)
  // }

  // ping (cb) {
  //   if (!this.mongoose.connection.db) {
  //     return cb(new Error('Not connected to database'))
  //   }
  //   this.mongoose.connection.db.admin().ping((err, result) => {
  //     if (err) { return cb(err) }
  //     cb(null, result)
  //   })
  // }

  // _setupMongoosePlugins () {
  //   this.logger.verbose('Attaching plugins')
  //   this.mongoose.plugin(mongooseTimestamp)
  //   this.mongoose.plugin(mongooseSoftRemove)
  //   this.mongoose.plugin(mongooseCountAndFind)
  //   this.logger.verbose('Plugins attached')
  // }

//   _setupMongooseModels () {
//     this.logger.verbose('Registering models')
//     this.mongoose.model('Car', carSchema)
//     this.mongoose.model('City', citySchema)
//     this.mongoose.model('User', userSchema)
//     this.mongoose.model('Role', roleSchema)
//     this.mongoose.model('Lead', leadSchema)
//     this.mongoose.model('Brand', brandSchema)
//     this.mongoose.model('Model', modelSchema)
//     this.mongoose.model('Province', provinceSchema)
//     this.mongoose.model('Permission', permissionSchema)
//     this.mongoose.model('CityCaba', cityCabaSchema)
//     this.mongoose.model('CityInsurer', cityInsurerSchema)
//     this.logger.verbose('Models registered')
//   }
}

module.exports = Database
