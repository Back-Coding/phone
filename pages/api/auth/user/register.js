import { body, validationResult } from 'express-validator';
import connectDB from '../../../../middleware/mongoose';
import User from '../../../../module/User';
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Validation rules
    // If there are errors, return Bad request and the errors
      await Promise.all([
        body('name', 'Enter a valid name').notEmpty().run(req),
        body('email', 'Enter a valid email').isEmail().run(req),
        body('password', 'Password is required').notEmpty().run(req),
      ]);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password } = req.body;
      
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
      }
      // Create a new user
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
    let user = await User.create({
        name: name,
        password: secPass,
        email:email,
      });
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, process.env.JWT_SECRET);
      // const user = new User({ name, email, password:secPass });
      await user.save();
      return res.status(200).json({authtoken});
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Internal Server error' });
    }
  } else {
    return res.status(405).json({ error: ' Not Allowed' });
  }
};

export default connectDB(handler);
