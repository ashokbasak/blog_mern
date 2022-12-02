const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/register", async (req, res) => {
  //  const { username, email, phone, work, password, cpassword } = req.body;
  //  if (!username || !email || !phone || !work || !password || !cpassword) {
  //    return res.status(422).json({ error: "plz fill all the fields" });
  //  }
  try {
    //   const userExists = await User.findOne({ email: email });
    //   if (userExists) {
    //     res.status(422).json({ error: "email already exists!" });
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const hashCPassword = await bcrypt.hash(req.body.cpassword, 10);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      cpassword: hashCPassword,
    });
    

    await user.save();
    res.status(200).json({message:"User registered successfully"});
  } catch (error) {
    console.log(error);
  }
});
// router.post("/signin", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     !user && res.status(400).json("Wrong credentials!");

//     const validated = await bcrypt.compare(req.body.password, user.password);
//     !validated && res.status(400).json("Wrong credentials!");

//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "plz fill all the fields!" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {

      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
     //localStorage.setItem("token", userLogin.tokens.token)
      console.log(token);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials!" });
      } else {
        res.status(201).json({ message: "User Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
