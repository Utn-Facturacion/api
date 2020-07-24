module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FacturaDetalles', {
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
      },
      facturaId: Sequelize.INTEGER,
      cuotaId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FacturaDetalles')
  }
}
