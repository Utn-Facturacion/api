'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Servicios', {
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
      },
      matriculaId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Servicios')
  }
}
