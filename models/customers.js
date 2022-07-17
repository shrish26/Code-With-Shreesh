const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  phonenumber: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  message: {
    type: String,
    required: false,
    maxlength: 5000
  },
});

  const Customer = mongoose.model('Customer', customerSchema);

  module.exports.Customer = Customer; 