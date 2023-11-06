const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require('path');
const usermodel =require("./models/usermodel");

app.use(express.urlencoded({extended:true}));
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/typing", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo is connected");
});

app.post('./login',async(req,res)=>{
    const data=req.body;
    const user= await new usermodel(data);
    await user.save();
    res.send('successfully')

})
app.listen(3000, () => {
    console.log("server is running on port:3000");
  });
  