import neo4j from 'neo4j-driver';
import { URI, USER, PASSWORD } from '../utils/constants.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

// initialize global driver variable
let driver;

// create driver instance from neo4j driver by providing databse URI and authentication
export const initDriver = function () {
  driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
};

// function to return driver object
export const getDriver = () => {
  if (driver) return driver;
};

/**
 *
 * @param {string} query
 * @param {object} params
 * @returns {object}
 */
// function to execute Read operation in databse
export const executeRead = async (query, params = {}) => {
  try {
    // open a driver session
    const session = driver.session();
    // perform read operation on database
    const res = await session.executeRead((tx) => tx.run(query, params));
    // close the session
    await session.close();
    // return data received from database
    return res.records;
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param {string} query
 * @param {object} params
 * @returns {Records object}
 */
// function to execute Write operation in databse
export const executeWrite = async (query, params = {}) => {
  try {
    // open a driver session
    const session = driver.session();
    // perform write operation on databse
    const res = await session.executeWrite((tx) => tx.run(query, params));
    // close the session
    await session.close();
    // return data received from database
    return res.records;
  } catch (err) {
    console.log(err);
  }
};
