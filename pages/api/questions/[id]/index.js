import parseDate from '@/utils/js-date';
import { executeRead, executeWrite } from '@/utils/neo4j';

export default async function getQuestion(req, res) {
  try {
    if (req.method == 'GET') {
      const { id } = req.query;
      const query = 'MATCH (q:Question {id:$id}) return q';
      const params = { id };
      const result = await executeRead(query, params);
      const data = result[0].get('q').properties;
      if (data.created_at)
        data.createdAt = parseDate(data.created_at).toDateString();
      res.status(200).json({ status: 'success', data });
    }
    if (req.method == 'POST') {
      const { id } = req.query;
      const { answer, userId } = req.body;
      const query = `MATCH (u:User {id:$uId}), (q:Question {id: $qId})
                MERGE (u)-[r:ANSWER {id:randomUuid(), answer:$answer, created_at: datetime()}]->(q)
                RETURN r.answer AS ans;
  `;
      const params = { uId: userId, qId: id, answer };
      const result = await executeWrite(query, params);
      if (result.length === 0) throw Error;
      res.status(201).json({
        status: 'success',
        message: 'answer posted',
      });
    }
    if (req.method === 'DELETE') {
      console.log('deleting question');
      const { id } = req.query;
      const query = 'MATCH(q:Question {id:$id}) DETACH DELETE q';
      const params = { id };
      const result = await executeWrite(query, params);
      res.status(200).json({
        status: 'success',
        message: 'question deleted',
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong' });
  }
}
