/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/breather');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to MongoDb'));
db.once('open', function () {
  console.log('Connected to MongoDb');
});



module.exports = db;