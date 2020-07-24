module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Matriculas', [{
      AltaFecha: new Date(),
      monto: 1000,
      personaId: 1,
      // cuotaId: 1,
      // servicioId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
