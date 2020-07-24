const Sequelize = require('sequelize')

const servicio = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fechaAlta: {
    type: Sequelize.DATE
  },
  fechaBaja: {
    type: Sequelize.DATE
  },
  servicioMonto: {
    type: Sequelize.FLOAT
  },
  nombre: {
    type: Sequelize.STRING
  }
}

module.exports = servicio
