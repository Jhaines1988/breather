/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')

const app = express();
const port = 3000
const bodyParser= require('body-parser');

app.use(express.static(__dirname + '/../dist'))
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})