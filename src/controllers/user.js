const app = require('express')();
const user = require('../model/users');

module.exports.addUser = async (request, response) => {
    const {name, email, salary, designation}=request.body;

    //convert email to lowerCase and remover space if any
    var userEmail = email.toLowerCase().trim();
    
    //find by email
    const userExist = await user.findOne({ "email":userEmail });
        
    //check if user exist?
    if(userExist.email === userEmail){
        return response.send(`Please try with different email!`);
    }

    //collect user detail and store in collectUserData variable
    const collectUserData = new user({ name, email, salary, designation });

    try{
        //create new user and save to collection
        const createNewUser=await collectUserData.save();
        response.status(201).send('user created!');
    }catch(error){
        response.status(400).send(error);
    }
    
}
