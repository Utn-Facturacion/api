const Sequelize = require('sequelize')

const persona = require('../models/persona')
const user = require('../models/user')
const matricula = require('../models/matricula')
const servicio = require('../models/servicio')
const cuota = require('../models/cuota')
const facturaDetalle = require('../models/factura-detalle')
const factura = require('../models/factura')
const pago = require('../models/pago')

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
    // this._setupSequelizeAssociations()
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

    const User = this.sequelize.define('User', user)
    const Persona = this.sequelize.define('Persona', persona)
    const Matricula = this.sequelize.define('Matricula', matricula)
    const Servicio = this.sequelize.define('Servicio', servicio)
    const Cuota = this.sequelize.define('Cuotas', cuota)
    const FacturaDetalle = this.sequelize.define('FacturaDetalle', facturaDetalle)
    const Factura = this.sequelize.define('Factura', factura)
    const Pago = this.sequelize.define('Pago', pago)

    this.logger.verbose('Models registered')

    this.logger.verbose('Registering Associations')

    Persona.hasOne(Matricula, { foreignKey: 'personaId' })
    Matricula.belongsTo(Persona)
    Matricula.hasMany(Servicio, { foreignKey: 'matriculaId' })
    Matricula.hasMany(Cuota, { foreignKey: 'MatriculaId' })
    Cuota.belongsTo(Matricula)
    Cuota.hasMany(FacturaDetalle, { foreignKey: 'CuotaId' })
    FacturaDetalle.belongsTo(Cuota)
    Factura.hasMany(FacturaDetalle, { foreignKey: 'facturaId' })
    FacturaDetalle.belongsTo(Factura)
    Persona.hasMany(Factura, { foreignKey: 'personaId' })
    Factura.belongsTo(Persona)
    Factura.hasMany(Pago, { foreignKey: 'facturaId' })
    Pago.belongsTo(Factura)

    this.logger.verbose('Associations registered')
  }

  _setupSequelizeAssociations () {
    this.logger.verbose('Registering Associations')

    this.logger.verbose('Associations registered')
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
