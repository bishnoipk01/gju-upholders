import express, { Router } from 'express';

import { validateUser } from '../controllers/authController.js';
import { getAll, getById, postBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.get('/get-all', getAll);
blogRouter.get('/:id', getById);
// validate user before they can post blog
blogRouter.post('/new-blog', validateUser, postBlog);

export default blogRouter;
