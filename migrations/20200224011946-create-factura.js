module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Facturas', {
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
      },
      personaId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Facturas')
  }
}
