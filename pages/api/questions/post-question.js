import { executeWrite } from '@/utils/neo4j';
// post a new question and store in database
export default async function PostNewQuestion(req, res) {
  try {
    // get params from req body
    const { title, description, Uid } = req.body;
    // query to post question
    const query = `
            MATCH(u:User {id:$Uid})
            MERGE(q:Question {id: randomUuid(), title: $title, description:$description}) 
            MERGE((u)-[r:ASK]->(q))
            RETURN q`;
    //  parameter that used in query
    const params = { title, description, Uid };
    // await the result from executeWrite query
    const result = await executeWrite(query, params);
    // send response back to client
    res.status(201).json({
      status: 'success',
      question: result[0].get('q').properties,
    });
  } catch (err) {
    throw err;
  }
}
