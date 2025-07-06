export const checkAdminRole = (req, res, next) => {
  console.log("🔍 req.user en checkAdminRole:", req.user);
  if (req.user?.role !== 'administrator') {
    return res.status(403).json({ message: 'Acceso denegado: se requiere rol administrador' });
  }
  next();
};