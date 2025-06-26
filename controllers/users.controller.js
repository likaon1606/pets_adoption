import UserModel from '../models/user.model.js';

const userModel = new UserModel(); // instanciamos la clase

export default class UserController {
  async createUser(req, res) {
    try {
      const user = await userModel.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userModel.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserByEmail(req, res) {
    try {
      const user = await userModel.findByEmail(req.params.email);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userModel.update(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      await userModel.delete(req.params.id);
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
