var{mongoose} =require('./mongoose');
var{Author} =require('./user');
const express = require('express');//express
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));

app.post('/course/api',(req,res)=>{ //to send data

var dog = new Author({ firstname:req.body.firstname, secondname:req.body.secondname,
  id:req.body.id,age:req.body.age });

  dog.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });

});
app.get('/course/api',(req,res)=>{       //to get all records

Author.find().then((doc)=>{
  res.send(doc)
},(err)=>{
  res.status(400).send(err);
});
});


app.get('/course/api/:id',(req,res)=>{       //to get single records

Author.find({id:req.params.id}).then((doc)=>{
  res.send(doc)
},(err)=>{
  res.status(400).send(err);
});
});

app.put('/course/api/',(req,res)=>{

  Author.update({id:req.body.id},{$set:{firstname:req.body.firstname,age:req.body.age}}).then((doc)=>{
    res.send(doc)
  },(err)=>{
    res.status(400).send(err);
  });
});

app.delete('/course/api/',(req,res)=>{

  Author.remove({id:req.body.id}).then((doc)=>{
    res.send(doc)
  },(err)=>{
    res.status(400).send(err);
  });
});
app.listen(3000);
console.log('app is running');
