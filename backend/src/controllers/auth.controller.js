const User = require("../models/user.model");

const signup = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const isUserAlreadyExists = await User.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(409).json({ message: "User already exists" });
  }
  try {
    const user = await User.create({ email, username, password });
    console.log(user);
    return res
      .status(200)
      .json({ success: true, message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { signup };
