module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pagos', {
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
      tipo: Sequelize.STRING,
      facturaId: Sequelize.INTEGER,
      efectivoId: Sequelize.INTEGER,
      pagoMisCuentasId: Sequelize.INTEGER,
      depositoId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pagos')
  }
}
