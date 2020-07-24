module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FacturaDetalles', [{
      cantidad: 1,
      descripcion: 'Cuota Febrero',
      monto: 1500,
      codigo: 1,
      subtotal: 1500,
      facturaId: 2,
      cuotaId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FacturaDetalles', null, {})
  }
}
