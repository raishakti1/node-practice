var{mongoose} =require('./mongoose');
var{Author} =require('./user');
const express = require('express');//express
const app = express();
const router = express.Router();
const bodyparser=require('body-parser');
app.use(bodyparser.json());

var authenticate = require('./authenticate');
const jwt = require('jsonwebtoken');
var bcrypt=require('bcryptjs');
const path = require('path');





router.post('/signup',(req,res)=>{ //to send



   bcrypt.genSalt(6,(err,salt)=>
  {
    bcrypt.hash(req.body.password,salt,(err,result)=>{

      var dog = new Author({ firstname:req.body.firstname, secondname:req.body.secondname,
        username:req.body.username,password:result });

        dog.save().then((doc)=>{
          res.send(doc);
        },(err)=>{
          res.status(400).send(err);
        });

      });


  });
  });
router.get('/shakti',authenticate,(req,res)=>{
  //console.log(req.headers['Authorization']);
  res.status(200).json({"error":"TOKEN IS VERIFIED"});
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
  console.log(req.body.username);

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
    res.status(400).send(err);
  });
});


module.exports = router;
