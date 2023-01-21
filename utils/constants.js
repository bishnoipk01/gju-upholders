import {config} from 'dotenv';
// configures .env variables into process.env variables
config()

// get the process env variables and stores them into constant variables
export const PORT = process.env.PORT || 3000
export const URI = process.env.NEO4J_URI
export const USER = process.env.NEO4J_USERNAME
export const PASSWORD = process.env.NEO4J_PASSWORD
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
export const JWT_EXPIRE_IN = process.env.JWT_EXPIRE_IN
export const COOKIE_EXPIRATION = process.env.COOKIE_EXPIRATION
