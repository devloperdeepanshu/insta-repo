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
    const { name, email, password } = req.body; 
    console.log('Registering user:', req.body);
  
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({ message: 'Your Report Has Been Regisered now your account in secure', user });
    } catch (err) {
      console.error("❌ Error saving user:", err.message);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  }); 
   

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
