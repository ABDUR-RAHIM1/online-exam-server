// profileModel.js
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    photo: {
        type: String,
        default: '',
    },
    bio: {
        type: String,
        default: '',
    },
    contactNumber: {
        type: Number,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    skills: {
        type: [String],
        default: [],
    },
    experience: { type: String, default: "" },
    jobPreferences: { type: String, default: '' },

}, { timestamps: true });

export default profileSchema;
