const mongoose  = require('mongoose') 


console.log(process.env.MONGO_URI) //la variable debe estar en el mismo nivel de node en el proyecto
const URI = process.env.MONGO_URI?process.env.MONGO_URI: 
'mongodb://localhost/slipchat'  // process es el objeto que tiene todo el acceso al proyecto y al pc

mongoose.connect(URI, {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const conection = mongoose.connection;


conection.once('open', () =>{
  console.log('DB is connected')
})


