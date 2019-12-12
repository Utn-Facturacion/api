const Sequelize = require('sequelize')

const person = {
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
  birthdate: Sequelize.DATE
}

module.exports = person
