//mongoose ORM
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


//import secret code
require('dotenv').config();

//DB connection
mongoose.connect(process.env.DB_CONNECTION,  (error)=>{
    if(!error) 
        return console.log(' Db connected!!! \n');
    //else return DB error!
    console.log(' DB error! ');
}); 
