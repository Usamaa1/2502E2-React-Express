import express from 'express';
import { login, signup } from '../controller/userController/userController.mjs';

const userRoute = express.Router();


userRoute.post('/signup',signup);
userRoute.get('/login',login);

export default userRoute;

