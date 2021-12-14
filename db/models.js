/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const user = new Schema({
    firstName:String,
    lastName:String,
    // boxBreathing:Number,
    // fiveByFive:Number,
    email:String,
    password:String,
    history:[{type:Schema.Types.ObjectId, ref:'History',required:true}]
})


const history  = new Schema({
    user:{type:Schema.Types.ObjectId,ref:'User'},
    // userName: user._id,
    exerciseName:String,
    roundsCompleted:Number

})


const userModel = mongoose.model('User',user)
const historyModel = mongoose.model('History',history )

module.exports = {
    userModel,
    historyModel,
}