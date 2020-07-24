const Router = require('express').Router
const router = new Router()

router.get('/', getPersonas)

async function getPersonas (req, res) {
  const users = await req.model('Persona').findAndCountAll({
    include: [{ model: req.model('Matricula') }]
    // include: [{
    //   model: req.model('Matricula'),
    //   include: [
    //     { model: req.model('Servicio') },
    //     {
    //       model: req.model('Cuotas'),
    //       include: [
    //         {
    //           model: req.model('FacturaDetalle'),
    //           include: [{ model: req.model('Factura') }]
    //         }
    //       ]
    //     }
    //   ]
    // }]
  })
  res.send(users)
}

module.exports = router
