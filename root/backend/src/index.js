require('dotenv').config() //cuando inicie todo produzco una variable necesaria

const app = require('./app')
require('./database')
async function main(){
  await app.listen(app.get('port'))
}

main()
.then(console.log('Server on port', app.get('port')))


