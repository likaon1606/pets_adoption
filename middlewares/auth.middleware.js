import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "mi_clave_secreta";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Token requerido" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // puedes usar req.user.id, req.user.role
    next();
  } catch (err) {
    res.status(403).json({ message: "Token inválido o expirado" });
  }
};
