const {Router} = require('express') //objeto router en express
const router = Router()

const {getUsers, createUser, deleteUser, getUser, updateUser}  = require('../controllers/users.controller')

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)
  .patch() //actualiza propiedades de un objeto

module.exports = router