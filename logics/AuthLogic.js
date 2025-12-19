const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const { User } = require("../model");
dotenv.config();

const register = async (req, res) => {
  const { userName, email, password } = req.body;
  const userExist = await User.findOne({email});
  if (userExist) {
    throw new Error("user already exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(password, salt);

  const newUser = new User({ userName, email, password: hash });
  await newUser.save();
  return res.status(201).json(newUser);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7D" }
  );

  return res.status(200).json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
    },
  });
};

module.exports = { register, login };