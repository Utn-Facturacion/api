module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cuotas', {
      id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      montoCuota: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      montoAbonado: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      anio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      matriculaId: Sequelize.INTEGER,
      facturaDetalleId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cuotas')
  }
}
