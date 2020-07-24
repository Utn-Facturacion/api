module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas', {
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
      },
      personaId: {
        type: Sequelize.INTEGER
      },
      cuotaId: {
        type: Sequelize.INTEGER
      },
      servicioId: {
        type: Sequelize.INTEGER
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Matriculas')
  }
}
