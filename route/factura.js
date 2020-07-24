const Router = require('express').Router
const router = new Router()

router.get('/:id', getFacturasByStudent)
router.get('/:id/detalle', getFacturaById)

router.post('/updatefactura', updateFacturaById)

async function getFacturasByStudent (req, res) {
  const facturas = await req.model('Factura').findAll({
    where: { personaId: req.params.id }
  })
  res.send(facturas)
}

async function updateFacturaById (req, res) {
  try {
    const factura = await req.model('Factura').update({
      total: req.body.total,
      pagada: req.body.pagada
    }, {
      where: { id: req.body.id }
    })
    res.send(factura)
  } catch (error) {
    res.send(error)
  }
}

async function getFacturaById (req, res) {
  const facturas = await req.model('Factura').findOne({
    where: { id: req.params.id },
    include: [
      { model: req.model('Persona') },
      { model: req.model('Pago') },
      {
        model: req.model('FacturaDetalle'),
        include: [
          {
            model: req.model('Cuotas'),
            include: [
              {
                model: req.model('Matricula'),
                include: [
                  { model: req.model('Servicio') }
                ]
              }
            ]
          }
        ]
      }
    ],
    order: [[req.model('FacturaDetalle'), req.model('Cuotas'), 'id', 'asc']]
  })
  res.send(facturas)
}

module.exports = router
