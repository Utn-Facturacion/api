const Router = require('express').Router
const router = new Router()

router.post('/', createPago)

async function createPago (req, res) {
  const pago = await req.model('Pago').create({
    fecha: new Date(),
    monto: req.body.monto,
    facturaId: req.body.facturaId,
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  res.send(pago)
}

module.exports = router
