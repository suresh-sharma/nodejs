const User = require('../models/User');

// Create a new user

const CreateUser=(req, res)=>( async()=>{
    const { name, email, age } = req.body;
    try {
      const newUser = await User.create({ name, email, age });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});

// Get all users
const GetAllUser=(req, res)=>( async()=>{
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

// Get user by id
const GetUserById=(req, res)=>( async()=>{
  try {
    const id=req.body.id;
    const users = await User.findById(id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a user


const UpdateUser=(req, res)=>( async()=>{
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a user
const DeleteUser=(req, res)=>( async()=>{
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports={CreateUser,GetAllUser, GetUserById,UpdateUser,DeleteUser};