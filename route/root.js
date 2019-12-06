const pkg = require('../package')
const Router = require('express').Router
const router = new Router()

router.get('/', getRoot)

function getRoot (req, res) {
  req.logger.verbose('Responding to root request')
  req.logger.verbose('Sending response to client')

  res.status(200).send({
    name: pkg.name,
    version: pkg.version,
    node_version: process.version,
    status: '👌'
  })
}

module.exports = router
