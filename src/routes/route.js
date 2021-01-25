const { response } = require('express');

const router = require('express').Router();
const {addUser} = require('../controllers/user');


//route: localhost:5000/api/user/adduser
//Description: add users detail
router.post('/addUser', addUser);

module.exports = router;