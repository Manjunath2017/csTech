const app = require('express')();
const user = require('../model/users');



module.exports.addUser = async (request, response) => {

    const userData = new user({
        name: request.body.name,
        email: request.body.email,
        salary: request.body.salary,
        designation: request.body.designation
    });
    console.log('addUser', userData);
}
