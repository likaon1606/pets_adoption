import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("🧾 Authorization header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Token requerido" });
  }

  const token = authHeader.split(" ")[1];
  console.log("🟡 Token recibido:", token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("🔐 Token decodificado:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("🔴 Error verificando token:", err.message);
    res.status(403).json({ message: "Token inválido o expirado" });
  }
};
