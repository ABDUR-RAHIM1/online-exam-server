import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './route/userRoute.js';
import profileRouter from './route/profileRoute.js';
import adminCourseouter from './route/adminCourceRoute.js';
import testRouter from './Test/TestFileUplaod.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the API Home Page!");
});


// test routes
app.use("/api/test", testRouter)


// User Routes
app.use("/api/user", userRouter);

// profile Route
app.use("/api/profile", profileRouter);

// admin course route
app.use("/api/course", adminCourseouter)


export default app;   
