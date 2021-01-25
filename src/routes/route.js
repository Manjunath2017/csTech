const router = require('express').Router();
const {addUser, getUsers, getSingleUser, editUser} = require('../controllers/user');


router.post('/user', addUser);
router.get('/users', getUsers);
router.get('/user/:id', getSingleUser);
router.patch('/user/:id', editUser);


module.exports = router;