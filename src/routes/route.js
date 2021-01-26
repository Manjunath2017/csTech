const router = require('express').Router();
const {addUser, getUsers, getSingleUser, editUser, deleteUser} = require('../controllers/user');


router.post('/user', addUser);
router.get('/users', getUsers);
router.get('/user/:id', getSingleUser);
router.patch('/user/:id', editUser);
router.delete('/user/:id', deleteUser);



module.exports = router;