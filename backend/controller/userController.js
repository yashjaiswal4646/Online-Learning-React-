const userModel = require('../models/userModel');

const createUser = async (req, res) => {
  try {
    const { username, email, password, phone, gender } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new userModel({
      username,
      email,
      password,
      phone,
      gender,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error in createUser:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error in getUsers:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, phone, gender } = req.body;

    // Check if the email is already taken by another user (excluding the current user)
    const existingUserWithEmail = await userModel.findOne({ email });
    if (existingUserWithEmail && existingUserWithEmail._id.toString() !== id) {
      return res.status(400).json({ message: 'Email is already in use by another user.' });
    }

    // Proceed with updating the user
    const user = await userModel.findByIdAndUpdate(
      id,
      { username, email, phone, gender },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    console.error('Error in updateUser:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error in deleteUser:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error in getUserById:', err);
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { createUser, getUsers, updateUser, deleteUser, getUserById, loginUser };
