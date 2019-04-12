var{mongoose} =require('./mongoose');
var{Author} =require('./user');
var{product} =require('./product');
const express = require('express');//express
const app = express();
const router = express.Router();
const bodyparser=require('body-parser');
app.use(bodyparser.json());

var authenticate = require('./authenticate');
const jwt = require('jsonwebtoken');
var bcrypt=require('bcryptjs');
const path = require('path');

router.post('/product',authenticate,(req,res)=>{

  Author.update({_id:req.decoded._id},{$push:{products:req.body.products}}).then((doc)=>{
    res.status(200).send(doc);
  },(err)=>{
    res.status(400).send(err);
  });

});





router.post('/signup',(req,res)=>{ //to send



   bcrypt.genSalt(6,(err,salt)=>
  {
    bcrypt.hash(req.body.password,salt,(err,result)=>{

      var dog = new Author({ firstname:req.body.firstname, secondname:req.body.secondname,
        username:req.body.username,password:result,address:req.body.address,proof:req.body.proof,mail:req.body.mail,phonenumber:req.body.phonenumber,mothername:req.body.mothername });

        dog.save().then((doc)=>{
          res.send(doc);
        },(err)=>{
          res.status(400).send(err);
        });

      });


  });
  });


router.post('/check',authenticate,(req,res)=>{

  Author.findOne({_id:req.decoded._id}).then((doc)=>{

    bcrypt.compare(req.body.password,doc.password,(err,result)=>
    {
      if(!result)
      {
     return res.status(400).json({"error":"password not correct"});
      }
      res.status(200).json({"message":"successfull"});
    });


});
});

router.get('/findone',authenticate,(req,res)=>{

Author.findOne({_id:req.decoded._id}).then((doc)=>{

  res.status(200).send(doc);
  console.log(doc);

},(err)=>{
  res.status(400).send(err);
});
});





router.put('/updatepassword',authenticate,(req,res)=>{
  bcrypt.genSalt(6,(err,salt)=>
 {
   bcrypt.hash(req.body.password,salt,(err,result)=>{

  Author.update({_id:req.decoded._id},{$set:{password:result}}).then((doc)=>{
    res.status(200).send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});
});
});

router.delete('/delete',authenticate,(req,res)=>{

  Author.remove({_id:req.decoded._id}).then((doc)=>{
    res.status(200).send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});


router.post('/signin', (req, res) => {


  Author.findOne({ username:req.body.username}).then((doc)=>{
    if(!doc)
    {
res.status(400).json({"error":"hi"});
  }

  else{
   let token = jwt.sign({_id:doc._id},'abc123', {
          expiresIn: 1440 // expires in 1 hour
       });
       bcrypt.compare(req.body.password,doc.password,(err,result)=>
       {
         if(!result)
         {
        return res.status(400).json({"error":"true"});
         }
         res.status(200).header('x-auth', token).json({token});
       });

}
},(err)=>{
    res.status(400).json({"error":"wrong"});
  });
});


module.exports = router;
