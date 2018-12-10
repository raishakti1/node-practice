const mongoose=require('mongoose');


const profile=new mongoose.Schema({
  firstname:{type:String,required:true,unique:true},
  secondname:{type:String,default:''},
  id:{type:Number,default:'',unique:true},
  age:{type:Number,trim:true,default:''}
});

var Author = mongoose.model('Author',profile,"shakti");

module.exports={
  Author:Author
};
