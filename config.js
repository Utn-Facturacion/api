const milieu = require('milieu')

const config = milieu('utnfacturacion', {
  server: {
    maxResultsLimit: 1000,
    port: process.env.PORT || 3333
  },

  logger: {
    console: {
      level: 'debug'
    }
  }
})

module.exports = config
