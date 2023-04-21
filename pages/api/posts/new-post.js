import { executeWrite } from '@/utils/neo4j';

// create a new post and store in database
export default async function CreatePost(req, res) {
  try {
    // get params from req body
    const { caption, image, Uid } = req.body;
    // query to save post
    const query = `
            MATCH(u:User {id:$Uid})
            MERGE(p:Post {id: randomUuid(), caption: $caption, image:$image, created_at: datetime()}) 
            MERGE((u)-[r:CREATE]->(p))
            RETURN p`;
    //  parameter that used in query
    const params = { caption, image, Uid };
    // await the result from executeWrite query
    const result = await executeWrite(query, params);
    // send response back to client
    res.status(201).json({
      status: 'success',
      post: result[0].get('p').properties,
    });
  } catch (e) {
    res.status(500).json({ message: 'something went wrong' });
  }
}
