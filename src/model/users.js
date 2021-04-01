const mongoose = require('mongoose')

//DataBase structure
const user = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Name is required!'],
    trim: true,
    minLength: [2, 'Length is to shot!'],
  },
  email: {
    type: String,
    require: [true, 'Email is required!'],
    lowercase: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  designation: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('newusers', user)
// Registering model and we can have access across all files(module.exports)
// 'newuser' is a collection name
// Define 'user'
