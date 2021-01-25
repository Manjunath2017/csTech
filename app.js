const app=require('express')();

//import secret code
require('dotenv').config();

//testing
app.get('/', (request, response) =>{
  response.send('<h1>Hello nodejs </h1>'+process.env.DB_CONNECTION);
});

//server listening on port 5000
app.listen(process.env.PORT || 3002, ()=>{
    console.log(`server listening on port ${process.env.PORT || 3002}`);
});