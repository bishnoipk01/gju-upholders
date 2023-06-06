// get all questions of asked by a user
import { executeRead } from '@/utils/neo4j';
export default async function getQuestion(req, res) {
  try {
    const { id } = req.body;
    if (!id) return res.status(200).json({});
    const query = `MATCH (q:Question)<-[:ASK]-(u:User {id:$id}) return q LIMIT 30`;
    const params = { id };
    const result = await executeRead(query, params);
    const questions = result.map((row) => row.get('q').properties);
    res.status(200).json({
      status: 'success',
      data: questions,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
