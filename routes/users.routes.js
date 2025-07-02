import { Router } from "express";
import { 
  createUser, 
  getAllUsers, 
  getUserById, 
  getUserByEmail ,
  updateUser,
  deleteUser
} from "../controllers/users.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";
import { validateAndHashPassword  } from "../middlewares/validatePassword.middleware.js";

const router = Router();

router.post("/register-adopters", validateAndHashPassword, createUser);
router.get("/users", verifyToken, getAllUsers);
router.get("/users/:id", getUserById);
router.get("/users/email/:email", getUserByEmail);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
