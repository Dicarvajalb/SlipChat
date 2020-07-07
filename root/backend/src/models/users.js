const {Schema, model} = require('mongoose') 

const userSchema = new Schema({
  username: {
    type: String,
    trim: true, //limpia los espacios en el string name.
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }

},{
  timestamps: true
})

module.exports = model('User', userSchema) 