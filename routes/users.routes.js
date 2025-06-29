import { Router } from "express";
import { 
  createUser, 
  getAllUsers, 
  getUserById, 
  getUserByEmail ,
  updateUser,
  deleteUser
} from "../controllers/users.controller.js";

const router = Router();

router.post("/register", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.get("/users/email/:email", getUserByEmail);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
