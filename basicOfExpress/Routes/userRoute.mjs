import express from 'express'
import { singleUser, userAdd, userData } from '../controller/userController.mjs';


const userRoute = express.Router();

userRoute.get('/user',userData);
userRoute.post('/userAdd',userAdd)
userRoute.get('/singleUser',singleUser)
// userRoute.get('/singleUser/:id',singleUser)

export default userRoute;