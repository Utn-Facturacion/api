module.exports = {
  server: {
    maxResultsLimit: 1000,
    port: process.env.PORT || 3333
  },
  logger: {
    console: {
      level: 'debug'
    }
  },
  mariadb: {
    url: 'mariadb://facundo@localhost/facturacion'
  }
}
