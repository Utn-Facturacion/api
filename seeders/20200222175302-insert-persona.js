module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas', [{
      name: 'Alumno1',
      lastname: 'Alumno1',
      dni: 37819027,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Personas', null, {})
  }
}
