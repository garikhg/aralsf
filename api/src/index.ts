import express, {Application} from "express";import mongoose from "mongoose";import cors from "cors";import dotenv from 'dotenv';dotenv.config();import authRoutes from './routes/auth';import itemRoutes from './routes/item';import userRoutes from './routes/user';import auth from "./middleware/auth";const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ts-crud';if (!mongoUri) {    throw new Error("MONGO_URI is not defined in the environment variables");}const app: Application = express();const PORT = 5001;app.use(cors());app.use(express.json());// MongoDB connectionmongoose.connect(mongoUri)    .then(() => console.log('Connected to MongoDB'))    .catch((err) => console.log('Error connecting to MongoDB:', err));const db = mongoose.connection;db.on("error", console.error.bind(console, 'MongoDB connection error:'));db.once("open", async () => console.log('Connected to MongoDB'));// Apply the auth middleware to protected routesapp.use('/api/protected', auth, userRoutes);// Other routesapp.use('/api/auth', authRoutes);app.use('/api/auth', authRoutes);app.use('/api/items', itemRoutes);app.use('/api/public', userRoutes);app.listen(PORT, () => console.log(`Server running on port ${PORT}`));