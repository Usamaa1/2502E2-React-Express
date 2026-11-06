import express from 'express';
import { addPost, deletePost, getPost } from '../controller/postController/postController.mjs';

const postRoute = express.Router();


postRoute.post('/addPost',addPost);
postRoute.get('/posts',getPost);
postRoute.delete('/deletePost/:id',deletePost);

export default postRoute;




