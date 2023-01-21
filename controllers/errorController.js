// this error controller handles all the error and send error response to client in a meaningful way in both development and production


// import the AppError Class from utils
import AppError from './../utils/appError.js';

// create custom error for Invalid jsontoken
const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

// create custom error for token expiry
const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);


// sends error in development with all the details needed to understand type of error
const sendErrorDev = (err, req, res) => {
 // error that occurs with /api routes
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {

    // A) Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    }
    // B) Programming or other unknown error: don't leak error details
    // 1) Log error
    console.error('ERROR 💥', err);
    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};

// default error handler for express app
export default (err, req, res, next) => {
  // set the status code with error code comes with error or set to 500 (server error)
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, req, res);
  }
};