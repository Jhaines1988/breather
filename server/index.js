/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const db = require('../db/connection.js');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const controllers = require('../db/controllers')

const addUser = controllers.addUser

app.use(express.static(__dirname + '/../dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.post('/login', (req, res, next) => {
//   console.log('req', req.body);

//   res.send('hey');
// });
app.post('/login',addUser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
