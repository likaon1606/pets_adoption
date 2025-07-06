import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;  // Aquí password, no password_hash

    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Correo no registrado" });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash); // Comparas con hash guardado
    if (!validPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
  }
};


export const logout = (req, res) => {
  res.status(200).json({ message: "Sesión cerrada (borrar token del cliente)" });
};
