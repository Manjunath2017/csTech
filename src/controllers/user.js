const app = require('express')();
const user = require('../model/users');
const mongoose = require('mongoose');

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
        const result=await user.find({}).sort({date:-1});
        response.status(200).send(result);
    }catch(error){
        //400 bad request
        response.status(500).send(`error: ${error}`);
    }
}

//route: localhost:5000/api/user
//Description: Get Single user
module.exports.getSingleUser = async(request, response)=>{
    try{
        //get user by ID... 'request.params.id' means get value from URL
        const result = await user.findById(request.params.id);
        response.status(200).send(result);
    }catch(error){
        //400 bad request
        response.status(400).send(`error: ${error}`);
    }
}

//route: localhost:5000/api/user/filter
//Description: Find by name and email
module.exports.findByNameAndEmail = async(request, response)=>{
    try{
        const {name, email}=request.query;
        console.log(name, email);

        //db.newusers.find({"name":{$regex:/Manjun/}, "email":{$regex:/m/} }).pretty();
        // const result = await user.find({"name":`{$regrex:/${name}/}` , "email":`{$regrex:/${email}/}`});
        console.log(result);
        response.status(200).send(result);
    }catch(error){
        //400 bad request
        response.status(400).send(`error: ${error}`);
    }
}

//route: localhost:5000/api/user
//Description: Update user's ID
module.exports.editUser = async(request, response)=>{
    try {
        console.log(request.params.id);
        //findById and Update 
        const result = await user.findByIdAndUpdate(request.params.id, {$set:request.body}, {new:true});
        response.status(200).send(result);
      }    
      catch (error) {
        //400 bad request
        response.status(400).send(`error: ${error}`);
      }
}
//route: localhost:5000/api/user/:id
//Description: Delete user

module.exports.deleteUser = async(request, response)=>{
    const id = request.params.id;   
    const valid=mongoose.Types.ObjectId.isValid(id);
    //check if ID is valid?
    if(!valid){
        //400 bad request
        return response.status(400).send('Invalid ID');
    }
     //find by user
     const userExist = await user.findById(id);
    if(id === `${userExist._id}`){
        try{
            const deleteUser=await user.findByIdAndDelete({'_id':id});
            response.send('user deleted!');
        }catch(error){
            // 400 bad request
            response.status(400).send(`error: ${error}`)
        }
    }else{
        return response.status(400).send('user does not exist! ');
    }
}