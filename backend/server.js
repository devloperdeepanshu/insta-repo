const express = require('express');
require("dotenv").config();
const cors = require('cors');
const connectDB = require("./database");
const User = require("./models/user");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(cors()); 
app.use(express.json());

app.post('/api/register', async (req, res) => {
    const { email, password } = req.body; 
    console.log('Registering user:', req.body);
  
    try {
      const user = new User({ email, password });
      await user.save();
      res.status(201).json({ message: 'Your Report Has Been Regisered now your account in secure', user });
    } catch (err) {
      console.error("❌ Error saving user:", err.message);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  }); 
   app.get('x', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.error("❌ Error fetching users:", err.message);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
