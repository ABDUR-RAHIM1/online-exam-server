import express from 'express';
import { createProfile, getProfile, updateProfile, deleteProfile } from '../controller/profileControler.js';
import authGuard from '../midlewere/authGuard.js';

const router = express.Router();

// Create a new profile
router.post('/create', authGuard, createProfile);

// Get profile details
router.get('/me', authGuard, getProfile);

// Update profile details
router.put('/update', authGuard, updateProfile);

// Delete profile
router.delete('/delete', authGuard, deleteProfile);

export default router;
