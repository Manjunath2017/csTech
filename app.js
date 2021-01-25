//express FrameWork
const express=require('express')
const app=express();
app.use(express.json());
//hide your secret code in .env file
require('dotenv').config();

//DB connection
require('./src/db/dbConnection');

//user router
const router = require('./src/routes/route');
app.use('/api/user', router);

//server listening on port 5000
app.listen(process.env.PORT || 3002, ()=>{
    console.log(`server listening on port ${process.env.PORT || 3002}`);
});