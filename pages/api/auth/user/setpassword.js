import bcrypt from 'bcrypt';
import connectDB from '../../../../middleware/mongoose';
import User from '../../../../module/User';

const handler = async (req, res) => {

  if (req.method !=='POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    const resetToken =req.headers.token;
    // Find user by reset token and check expiration
    const user = await User.findOne({
      resetToken,
      resetTokenExpiry: { $gt: Date.now() },
    });
    if (!user) {
      // Token is invalid or expired
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.confirmPassword, salt);

    // Update the user's password
    user.password = secPass;
    // Reset the reset token and expiry
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    // Save the updated user
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
}

export default connectDB(handler);