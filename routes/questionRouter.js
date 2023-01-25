import express from 'express';

import { validateUser } from '../controllers/authController.js';
import {
  getAllQuestions,
  postNewQuestion,
  getAnswersToQuestion,
  postAnswer,
} from '../controllers/questionController.js';

const questionRouter = express.Router();

questionRouter.get('/', getAllQuestions);
questionRouter.post('/new-question', validateUser, postNewQuestion);
questionRouter
  .route('/:id')
  .get(getAnswersToQuestion)
  .post(validateUser, postAnswer);

export default questionRouter;
