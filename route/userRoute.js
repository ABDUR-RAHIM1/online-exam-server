import express from 'express';
// import authGuard from '../middleware/authGuard.js';
import { createUser, deleteUser, getAllUser, getUser, loginUser, updateUser } from '../controller/usersController.js';
import { default as authGuard } from "../midlewere/authGuard.js";


const router = express.Router();

// Register user
router.post("/register", createUser);

// User login
router.post("/login", loginUser);

// Get user by token (logged-in user)
router.get("/me", authGuard, getUser);

// Get All user by admin 
router.get("/all", getAllUser);

// Update user by ID
router.put("/update/:id", authGuard, updateUser);

// Delete user by ID
router.delete("/delete/:id", authGuard, deleteUser);

export default router;   
