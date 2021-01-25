const router = require('express').Router();
const {addUser, getUsers, getSingleUser} = require('../controllers/user');


router.post('/addUser', addUser);
router.get('/users', getUsers);
router.get('/user/:id', getSingleUser);


module.exports = router;