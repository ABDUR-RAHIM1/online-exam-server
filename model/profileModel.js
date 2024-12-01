// profileModel.js
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, default: '' },
    profilePhoto: { type: String, default: '' },
    contactNumber: { type: String, default: '' },
    address: { type: String, default: '' },
}, { timestamps: true });

export default profileSchema;
