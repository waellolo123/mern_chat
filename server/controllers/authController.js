import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const register = async (req, res) => {
  const {fullName, username, password, confirmPassword, gender} = req.body;
  try {
   if(password !== confirmPassword) {
    return res.status(400).json({error: "Passwords don't match"});
  }
  const user = await User.findOne({username});
  if(user){
    return res.status(400).json({error: "Username already exists"});
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  
  const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
  })
  
  generateTokenAndSetCookie(newUser._id, res);
  
  await newUser.save();
  res.status(201).json({
    _id: newUser._id,
    fullName: newUser.fullName,
    username: newUser.username,
    profilePic: newUser.profilePic
  })  
  
} catch (error) {
  console.log("Error in registering user", error.message);
  res.status(500).json({error: "internal server error"});
}
}

export const login = async (req, res) => {
  
  const {username, password} = req.body;
  
  try {
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
    if(!user || !isPasswordCorrect){
      return res.status(400).json({error: "wrong credentials"});
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic
    }) 
  } catch (error) {
    console.log("Error in loging user", error.message);
    res.status(500).json({error: "internal server error"});
  } 
}

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "");
    res.status(200).json({message: "user logged out"})
  } catch (error) {
    console.log("Error in logout user", error.message);
    res.status(500).json({error: "internal server error"});
  }
}