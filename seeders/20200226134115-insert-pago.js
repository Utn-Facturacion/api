module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pagos', [{
      fecha: new Date(),
      monto: 1000,
      facturaId: 2,
      efectivoId: null,
      pagoMisCuentasId: null,
      depositoId: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pagos', null, {})
  }
}
