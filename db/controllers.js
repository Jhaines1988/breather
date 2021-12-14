/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const models = require('./models.js');
const User = models.userModel
const History = models.historyModel


const addUser = async function(req,res,next){

    console.log(req.body)

    try {
        let user = await User.create(req.body)

        res.send('created')
    } catch (error) {
        console.log('error Creating user',error)
    }


}

exports.addUser = addUser