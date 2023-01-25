import bcrypt from 'bcryptjs';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import { executeRead, executeWrite } from '../middlewares/neo4j.js';
import {
  JWT_SECRET_KEY,
  JWT_EXPIRE_IN,
  COOKIE_EXPIRATION,
} from '../utils/constants.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

// sign a JWT token using user id
const signToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE_IN,
  });
};
// send the user response with jwt as a cookie
const createSendToken = (user, statusCode, res) => {
  // Generate token
  const token = signToken(user.id);

  // define cookie options
  const cookieOption = {
    expires: new Date(Date.now() + COOKIE_EXPIRATION * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOption.secure = true;
  // sending token as cookie
  res.cookie('jwt', token, cookieOption);

  // sending response to client
  user.password = undefined;
  res.status(statusCode).json({
    token,
    data: { user },
  });
};

// check the provided password with actual database password of the user
const checkPassword = async (candidatePassword, userPassword) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// register a new user and stores in database
export const register = async (req, res) => {
  // extract info from request body
  const { name, email, password } = req.body;
  // encrypt user password
  const encryptPassowrd = await bcrypt.hash(password, 10);
  // query that needs to be run on database
  const query = `
        MERGE(u:User { id: randomUuid(), name:$name, email:$email, password:$encryptPassowrd})
        RETURN u
        `;
  // parameters used in query
  const params = { name, email, encryptPassowrd };
  // run the query on database
  // executeRead defined in neo4j.js middleware
  const result = await executeWrite(query, params);
  // extract user from data returned from database
  const user = result[0].get('u').properties;
  // send response to database
  createSendToken(user, 201, res);
};

// login the user provided with correct credentials
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  // check user has email and password
  if (!email || !password)
    return next(new AppError('Please Provide email and password'));

  // getting user (if any) based on email
  const query = `MATCH(u:User {email:$email}) return u`;
  // parameter used in query
  const params = { email };
  // run the query on database
  // executeWrite defined in neo4j.js middleware
  const result = await executeRead(query, params);
  // if no result returned raise error
  if (result.length === 0)
    return next(new AppError('Invalid Email or Password'));
  // get user from data
  const user = result[0].get('u').properties;
  // check if provided password is corrct or not
  if (!(await checkPassword(password, user.password)))
    return next(new AppError('Invalid email or Password'));

  // valid user, send token
  createSendToken(user, 200, res);
};

// logout the user
export const logout = (req, res) => {
  // clear cookie on res object
  res.clearCookie('jwt');
  res.status(200).json({ status: 'success' });
};

export const validateUser = catchAsync(async (req, res, next) => {
  // 1) get the token and check if it's present
  let token;
  // get the token from authorization headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) token = req.cookies.jwt;
  // if token is not present means user is not logged in
  if (!token)
    return next(new AppError('You are not logged in.. Please log in first'));
  // 2) verification of token
  const decodedToken = await promisify(jwt.verify)(token, JWT_SECRET_KEY);
  // 3) check if user still exists
  const query = 'MATCH(u:User {id:$id}) return u';
  const params = { id: decodedToken.id };
  const result = await executeRead(query, params);
  // if user is not present return with error
  if (result.length === 0)
    return next(
      new AppError('The User belonging to this token does not exists')
    );
  const currentUser = result[0].get('u').properties;
  req.user = currentUser;

  // grant access to protected routes
  next();
});
