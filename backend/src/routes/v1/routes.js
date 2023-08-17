
import express from "express";
const router = express.Router();
import authRoutes from './auth.routes.js';
import taskRoutes from './task.routes.js';


router.use('/auth', authRoutes);

router.use('/tasks', taskRoutes);


export default router;