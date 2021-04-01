const router = require('express').Router()
const {
  addUser,
  getUsers,
  getSingleUser,
  editUser,
  deleteUser,
  findByNameAndEmail,
} = require('../controllers/user')

router.post('/user', addUser)
router.get('/users', getUsers)
// router.get('/user/:id', getSingleUser);
router.post('/user/filter/', findByNameAndEmail)

router.patch('/user/:id', editUser)
router.delete('/user/:id', deleteUser)

module.exports = router
