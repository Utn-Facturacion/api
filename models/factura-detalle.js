const Sequelize = require('sequelize')

const facturaDetalle = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  subtotal: {
    type: Sequelize.FLOAT
  },
  cantidad: {
    type: Sequelize.INTEGER(10)
  },
  descripcion: {
    type: Sequelize.STRING
  },
  monto: {
    type: Sequelize.FLOAT
  },
  codigo: {
    type: Sequelize.STRING
  }
//   facturaId: Sequelize.INTEGER,
//   cuotaId: Sequelize.INTEGER
}

module.exports = facturaDetalle
