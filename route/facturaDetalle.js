const Router = require('express').Router
const router = new Router()

router.get('/', getFacturaDetalle)

async function getFacturaDetalle (req, res) {
  const detalle = await req.model('FacturaDetalle').findAll({
    // where: { id: req.params.id },
    include: [{ model: req.model('Cuotas') }]
  })
  res.send(detalle)
}

// async function getCuotaDescription (req, res) {
//   const description = await req.model('Cuotas').findOne({
//     where: { id: req.params.id },
//     include: [{
//       model: req.model('Matricula'),
//       include: [
//         { model: req.model('Servicio') },
//         { model: req.model('Persona') }
//       ]
//     }]
//   })
//   res.send(description)
// }

module.exports = router
