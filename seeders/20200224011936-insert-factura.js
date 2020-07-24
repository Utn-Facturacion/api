module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Facturas', [{
      codigo: 1231231,
      fecha: new Date('2020-02-01T19:13:12.686Z'),
      vencimiento: new Date('2020-02-28T19:13:12.686Z'),
      total: 1500,
      nombre: 'Persona 1',
      pagada: false,
      personaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Facturas', null, {})
  }
}
