const Router = require('express').Router
const router = new Router()

router.get('/:id', getCuotasByMatricula)
router.get('/:id/description', getCuotaDescription)

router.post('/updatemonto', updateCuotaById)

async function getCuotasByMatricula (req, res) {
  const cuotas = await req.model('Matricula').findOne({
    where: { id: req.params.id },
    include: [{ model: req.model('Cuotas') }]
  })
  res.send(cuotas)
}

async function getCuotaDescription (req, res) {
  const description = await req.model('Cuotas').findOne({
    where: { id: req.params.id },
    include: [{
      model: req.model('Matricula'),
      include: [
        { model: req.model('Servicio') },
        { model: req.model('Persona') }
      ]
    }]
  })
  res.send(description)
}

async function updateCuotaById (req, res) {
  try {
    const cuota = await req.model('Cuotas').update({
      montoAbonado: req.body.montoAbonado,
      estado: req.body.estado
    }, {
      where: { id: req.body.cuotaId }
    })
    res.send(cuota)
  } catch (error) {
    res.send(error)
  }
}

module.exports = router
