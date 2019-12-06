const figlet = require('figlet')
const pkg = require('../package')

process.stdout.write('\n')
process.stdout.write(`${figlet.textSync('facturacion-api', { font: 'Ogre' })}\n`)
process.stdout.write('\n')
process.stdout.write(`version: ${pkg.version} 🤘`)
process.stdout.write('\n')
process.stdout.write('\n')
