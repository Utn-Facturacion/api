const Sequelize = require('sequelize')

const matricula = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  AltaFecha: {
    type: Sequelize.DATE,
    allowNull: false
  },
  numero: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: true
  },
  monto: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}

module.exports = matricula
