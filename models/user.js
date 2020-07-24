const Sequelize = require('sequelize')

const user = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
}

module.exports = user
