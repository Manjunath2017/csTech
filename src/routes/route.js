const router = require('express').Router();
const {addUser, getUsers} = require('../controllers/user');



router.post('/addUser', addUser);
router.get('/users', getUsers);


module.exports = router;