const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  phone: String,
  company: {
    name: String,
    size: Number,
    industry: String,
  },
  hobbies: [String],
  favoriteBooks: [{
    title: String,
    author: String,
    readDate: Date,
  }],
  LastModified: Date,
});

const Chatgpt = mongoose.model('Chatgpt', schema);

module.exports = Chatgpt;
