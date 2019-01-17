const mongoose=require('mongoose');
var validator = require('validator');

const profile=new mongoose.Schema({
  firstname:{type:String,required:true},
  secondname:{type:String,required:true},
  username:{type:String,required:true,unique:true},
  password:{type:String,required:true}
});

var Author = mongoose.model('Author',profile,"login");

module.exports={
  Author:Author
};
