import express, { json } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';
import blogRouter from './routes/blogRouter.js';
import questionRouter from './routes/questionRouter.js';

const app = express();

// GLOBAL MIDDLEWARES
app.use(json());
app.use(cookieParser());
app.use(cors());

// ROUTER
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/questions', questionRouter);

// for all the unhandled Routes throw 404 not found
app.use('*', (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on the server!`, 404));
});

// Error handling
app.use(globalErrorHandler);

export default app;
