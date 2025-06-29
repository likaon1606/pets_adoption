import userModel from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const user = await userModel.findByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};


export const updateUser = async (req, res) => {
  try {
    const user = await userModel.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.delete(req.params.id);
    if(!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};