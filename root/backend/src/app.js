const express = require('express')
const cors = require('cors')
const app = express()


//senttings - Configuración de servidor
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(express.json()) //el servidor entenderá json

// routes // Esto es parte de la definición de la API backend
app.use('/users', require('./routes/users'))
app.use('/chats', require('./routes/chats'))
module.exports = app;