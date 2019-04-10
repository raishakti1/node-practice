const mongoose=require('mongoose');
var validator = require('validator');
const profile=new mongoose.Schema({

  username:{type:String,required:true,unique:true},
  products:[{type:String}]


});

var product = mongoose.model('product',profile,"product_info");

module.exports={
  product:product
};
