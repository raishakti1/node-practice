const mongoose=require('mongoose');
var validator = require('validator');
const jwt = require('jsonwebtoken');


const profile=new mongoose.Schema({
  firstname:{type:String,required:true},
  secondname:{type:String,required:true},
  username:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  address:{type:String,required:true},
  proof:{type:String,required:true},
  mail:{type:String,required:true,validate:{
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }},
  phonenumber:{type:Number,required:true,min:1000000000,max:9999999999},
  mothername:{type:String,required:true},
  products:[{type:String}]

});



var Author = mongoose.model('Author',profile,"login2");

module.exports={
  Author:Author
};
