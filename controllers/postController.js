import { executeRead, executeWrite } from '../middlewares/neo4j.js';
import catchAsync from '../utils/catchAsync.js';

// to get all the posts from the database by applying filters
export const getAllPost = catchAsync(async (req, res, next) => {});

// to create a new post
export const createPost = catchAsync(async (req, res, next) => {
  const { caption } = req.body;
  const query = `MATCH(u:User {id:$uId})
            MERGE(p:Post {id:randomUuid(),caption:$caption})
            MERGE((u)-[r:CREATE]->(p))
            return p.caption,u.name`;
  const params = { uId: req.user.id, caption };
  const result = await executeWrite(query, params);
  res.status(201).json({
    status: 'success',
    data: {
      post: result[0].get('p.caption'),
      user: result[0].get('u.name'),
    },
  });
});

// to retrieve a post by given id
export const getPostById = catchAsync(async (req, res, next) => {
  const postId = req.params.postId;
  const query = `MATCH(p:Post {id:$postId})
            MATCH((p)<-[r:CREATE]-(u))
            RETURN p,u`;
  const params = { postId };
  const result = await executeRead(query, params);
  res.status(200).json({
    status: 'success',
    data: {
      post: result[0].get('p').properties,
      user: result[0].get('u').properties,
    },
  });
});

// to add a comment
export const addCommentToPost = catchAsync(async (req, res, next) => {
  const { postId } = req.params;
  const { comment } = req.body;
  const query = `MATCH(u:User {id:$uId})
        MATCH(p:Post {id:$postId})
        MERGE((u)-[r:COMMENTS]->(p))
        SET r.comment = $comment
        RETURN p.id,u.name,r.comment`;
  const params = { uId: req.user.id, postId, comment };
  const result = await executeWrite(query, params);
  // sending response to client
  res.status(201).json({
    status: 'success',
    data: {
      postId: result[0].get('p.id'),
      comment: result[0].get('r.comment'),
      user: result[0].get('u.name'),
    },
  });
});

// to get all the comments on a post
export const getAllCommentOnPost = catchAsync(async (req, res, next) => {
  const postId = req.params.postId;
  const query = `MATCH(p:Post {id:$postId})
        MATCH((u:User)-[r:COMMENTS]->(p))
        RETURN p.id,u.name,r.comment`;
  const params = { postId };
  const result = await executeRead(query, params);
  const comments = result.map((row) => {
    return { user: row.get('u.name'), comment: row.get('r.comment') };
  });
  res.status(200).json({
    status: 'success',
    data: {
      postId: result[0].get('p.id'),
      comments,
    },
  });
});
