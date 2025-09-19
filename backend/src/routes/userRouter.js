// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware.js';
import { getUserProfile } from '../controllers/userController.js';


const userRouter = Router();


userRouter.get("/me",isLoggedIn,getUserProfile);
export default userRouter;