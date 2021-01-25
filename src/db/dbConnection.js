//mongoose ORM
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

//import secret code
require('dotenv').config();

//DB connection
//DB_CONNECTION = 'mongodb://localhost:27017/login'
mongoose.connect(process.env.DB_CONNECTION,  (error)=>{
    if(!error) 
        return console.log(' Db connected!!! \n');
    console.log(' DB error! ');
}); 
