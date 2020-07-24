module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Servicios', [{
      fechaAlta: new Date(),
      servicioMonto: 500,
      nombre: 'COMEDOR',
      matriculaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Servicios', null, {})
  }
}
