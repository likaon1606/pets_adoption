import { Router } from 'express';
import { createUser } from '../controllers/users.controller.js';
import { validateAndHashPassword } from '../middlewares/validatePassword.middleware.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { checkAdminRole } from '../middlewares/checkAdmin.middleware.js';

const router = Router();

// Solo un admin puede crear a otro admin
router.post(
  '/register',
  verifyToken,
  checkAdminRole,
  validateAndHashPassword,
  (req, res, next) => {
    req.body.role = 'administrator';  // aquí forzamos el rol
    next();
  },
  createUser
);


export default router;
