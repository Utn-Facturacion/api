const Sequelize = require('sequelize')

const cuota = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  estado: {
    type: Sequelize.STRING
  },
  montoCuota: {
    type: Sequelize.FLOAT
  },
  montoAbonado: {
    type: Sequelize.FLOAT
  },
  anio: {
    type: Sequelize.STRING
  },
  mes: {
    type: Sequelize.STRING
  }
  // matriculaId: Sequelize.INTEGER,
  // facturaId: Sequelize.INTEGER,
  // facturaDetalleId: Sequelize.INTEGER
}

module.exports = cuota
