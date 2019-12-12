module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Persons', {
      id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dni: Sequelize.INTEGER,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
      birthdate: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Persons')
  }
}
