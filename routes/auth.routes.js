import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/logout', logout); // opcional

export default router;
