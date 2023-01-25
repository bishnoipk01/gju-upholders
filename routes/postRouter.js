import express from 'express';

import { validateUser } from '../controllers/authController.js';
import {
  getAllPost,
  createPost,
  getPostById,
  addCommentToPost,
  getAllCommentOnPost,
} from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/', getAllPost);
postRouter.post('/new-post', validateUser, createPost);
postRouter.get('/:postId', getPostById);
postRouter.post('/:postId', validateUser, addCommentToPost);
postRouter.get('/:postId/comments', validateUser, getAllCommentOnPost);

export default postRouter;
