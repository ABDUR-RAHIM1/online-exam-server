import mongoose from 'mongoose';
import profileSchema from './profileModel.js';
import courseSchema from './courceSchema.js';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountType: {
        type: String,
        default: 'Free',
    },
    profile: profileSchema,
    courses: [courseSchema],

}, { timestamps: true });

export default mongoose.model('User', userSchema);
