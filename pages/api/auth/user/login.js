import bcrypt from 'bcrypt';
import  jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import connectDB from '../../../../middleware/mongoose';
import User from '../../../../module/User';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await Promise.all([
        body('email', 'Enter a valid email').isEmail().run(req),
        body('password', 'Password is required').notEmpty().run(req),
      ]);


    // Validation rules
  // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: " Invalid credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ success:false, error: "Invalid credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data,process.env.JWT_SECRET);
    let username=user.name;
    res.json({ authtoken,username,email:user.email})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default connectDB(handler);
