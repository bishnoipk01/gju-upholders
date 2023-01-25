import catchAsync from '../utils/catchAsync.js';
import { executeWrite, executeRead } from '../middlewares/neo4j.js';

export const getAll = catchAsync(async (req, res, next) => {});
// to get blog by passed ID
export const getById = catchAsync(async (req, res, next) => {
  const blogId = req.params.id;
  // query to run on DB
  const query = `MATCH(b:Blog {id:$blogId})
        MATCH((b)<-[r:WRITES]-(u))
        RETURN b,u`;
  const params = { blogId };
  // await result from neo4j session
  const result = await executeRead(query, params);
  // send response back to client
  res.status(200).json({
    status: 'success',
    data: {
      blog: result[0].get('b').properties,
      user: result[0].get('u').properties,
    },
  });
});

// post a new blog
export const postBlog = catchAsync(async (req, res, next) => {
  // get data from query object
  const { title, description } = req.body;
  // query
  const query = `MATCH(u:User {id:$uId})
        MERGE(b:Blog {id:randomUuid(),title:$title,description:$description})
        MERGE((u)-[r:WRITES]->(b))
        RETURN b,u.name`;
  const params = { uId: req.user.id, title, description };
  const result = await executeWrite(query, params);
  res.status(201).json({
    status: 'success',
    data: {
      blog: result[0].get('b').properties,
      user: result[0].get('u.name'),
    },
  });
});
