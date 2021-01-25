const app = require('express')();
const user = require('../model/users');

//route: localhost:5000/api/adduser
//Description: add users detail
module.exports.addUser = async (request, response) => {
    const {name, email, salary, designation}=request.body;

    //convert email to lowerCase and remover space if any
    var userEmail = email.toLowerCase().trim();
    
    //find by email
    const userExist = await user.findOne({ "email":userEmail }).populate(email);
 
    //check if user exist?
    if(userExist === userEmail)
        return response.send(`Please try with different email!`);
    

    //collect user detail and store in collectUserData variable
    const collectUserData = new user({ name, email, salary, designation });

    try{
        //create new user and save in collection(DB)
        const createNewUser=await collectUserData.save();
        response.status(201).send('user created!');
    }catch(error){
        //400 bad request
        response.status(400).send(`error: ${error}`);
    }
}

//route: localhost:5000/api/user
//Description: Get users
module.exports.getUsers = async(request, response)=>{
    try{
        //get user details
        const result=await user.find({});
        response.status(200).send(result);
    }catch(error){
        response.status(500).send(`error: ${error}`);
    }
}

