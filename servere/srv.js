var{mongoose} =require('./mongoose');
var{Author} =require('./user');
const express = require('express');//express
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));
var authenticate = require('./authenticate');
const jwt = require('jsonwebtoken');
var bcrypt=require('bcryptjs');
const path = require('path');





app.post('/course/api',(req,res)=>{ //to send



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


app.get('/course/api',authenticate,(req,res)=>{

Author.findOne({_id:req.decoded._id}).then((doc)=>{

  res.status(200).send(doc);
  console.log(doc);

},(err)=>{
  res.status(400).send(err);
});
});


app.get('/web',(req,res)=>{

 res.sendFile(path.join(__dirname+'/home.htm'));
//res.redirect('http://google.com');
//res.json({"date":Date.now()});
  //console.log(req.app);

});


app.put('/course/api/',authenticate,(req,res)=>{
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

app.delete('/course/api/',authenticate,(req,res)=>{

  Author.remove({_id:req.decoded._id}).then((doc)=>{
    res.status(200).send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});


app.post('/users', (req, res) => {

  Author.findOne({ username:req.body.username}).then((doc)=>{
    if(!doc)
    {
      res.status(400).json({"error":"true"});
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


app.listen(3000);
console.log('app is running');
