const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const usermodel = require("./models/usermodel");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/typing", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("MongoDB is connected");
});

app.post('/signup', async (req, res) => {
  const data = req.body;
  try {
    const user = new usermodel(data);
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
   res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  
  let email = req.body.email;
  const password = req.body.password;
  try {
    let userData = await usermodel.findOne({ email });
    
    if (!userData) {
      return res.status(500).json({ error: "User not found" });
    }
    if (password !== userData.password) {
      return res.status(500).json({ error: "Incorrect password" });
    }
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port: 8080");
});
