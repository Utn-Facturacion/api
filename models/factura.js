const Sequelize = require('sequelize')

const factura = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: Sequelize.STRING
  },
  fecha: {
    type: Sequelize.DATE
  },
  vencimiento: Sequelize.DATE,
  pagada: Sequelize.BOOLEAN,
  subtotal: {
    type: Sequelize.INTEGER(10)
  },
  total: {
    type: Sequelize.INTEGER(10)
  },
  nombre: {
    type: Sequelize.STRING
  }
}

module.exports = factura
