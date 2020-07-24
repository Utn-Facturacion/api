module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cuotas', [{
      estado: 'deuda',
      montoCuota: 1500,
      montoAbonado: 0,
      anio: 2020,
      mes: 'Febrero',
      matriculaId: 1,
      // facturaId: 1,
      // facturaDetalleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cuotas', null, {})
  }
}
