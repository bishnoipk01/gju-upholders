
// 'uncaught Exception' event is emmited when we throw a error and there is no catch block to handle the error 
// in that case we console the error and close the server.
process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log('uncaught Exception....shutting down the server');
  process.exit(1);
});

import app from './app.js';
import { initDriver } from './middlewares/neo4j.js';
import {PORT} from './utils/constants.js';

// Initiate Neo4j driver
initDriver();


const server = app.listen(PORT, () => {
  console.log(`Listening to server at http://localhost:${PORT}`);
});

// when a promise is rejected and there is  no error handler is attached to promise.
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('unhandled rejection....shutting down the server');
  server.close(() => {
    process.exit(1);
  });
});