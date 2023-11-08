const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const usermodel = require("./models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/typing", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("MongoDB is connected");
});

const jwtsecret = "MynameisAyushKumar"

app.post('/signup', [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new usermodel({
      name: data.name,
      email: data.email,
      password: hashedPassword
    });

    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  const password = req.body.password;

  try {
    let userData = await usermodel.findOne({ email });

    if (!userData) {
      return res.status(500).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
      return res.status(500).json({ error: "Incorrect password" });
    }
    
    const token = jwt.sign({ id: userData.id }, jwtsecret, { expiresIn: '10h' });

    res.json({ success: true, message: 'Login successful', token });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port: 8080");
});
