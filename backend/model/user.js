
const mongoose =require("mongoose")
const { data } = require("react-router-dom")
const userschema=new mongoose.Schema({
    name:String,
    phone:String,
    email:{type:String,unique:true},
    password:string,
    expenses :[
        {
        amount:Number,
        medium:string,
        category:string,
        createdat:{type:Date,default:Date.now}
        }
    ]
});

module.export=mongoose.model("user",userschema);