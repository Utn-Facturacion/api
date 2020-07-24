const Sequelize = require('Sequelize')

const pago = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: Sequelize.DATE,
    allowNull: false
  },
  monto: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  nombre: Sequelize.STRING,
  tipo: Sequelize.STRING
}

module.exports = pago
