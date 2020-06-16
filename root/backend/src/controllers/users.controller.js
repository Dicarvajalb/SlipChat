const Usermodel = require('../models/users')

const userCtrl = {}

userCtrl.getUsers = async(req,res) => {
  const users = await Usermodel.find() 
  res.json(users)
}

userCtrl.getUser = async(req,res) => {
  const user = await Usermodel.findById(req.params.id)
  res.json(user)
}

userCtrl.createUser = async(req,res) => {
  
  const {username, password, name} = req.body
  const newUser = new Usermodel({
    username: username,
    password: password,
    name: name
  })
  await newUser.save();
  
  res.send(newUser)
}

userCtrl.deleteUser = async(req,res) =>{
  const {username} = await Usermodel.findById(req.params.id)
  await Usermodel.findByIdAndDelete(req.params.id)
  res.send('Usuario ' + username + ' Eliminado')
}

userCtrl.updateUser = async(req, res) =>{
  await Usermodel.findOneAndUpdate({_id: req.params.id}, req.body)
  res.send('Usuario actualizado')
}

module.exports = userCtrl;