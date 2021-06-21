
const mongoose = require('mongoose')
const user = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number
  },
  city: {
    type: String
  },
  adress: {
    type: String
  },
  mail: {
    type: String
  },
  phone: {
    type: String
  }
})
module.exports = mongoose.model('User', user)
