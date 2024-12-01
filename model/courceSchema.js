import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
    status: { type: String, default: 'active' },
});


export default courseSchema;