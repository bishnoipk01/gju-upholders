import { executeRead } from '@/utils/neo4j';

export default async function getAllQuestions(req, res) {
  try {
    if (req.method === 'GET') {
      const query = `MATCH(q:Question) return q LIMIT 30`;
      const result = await executeRead(query);
      const questions = result.map((row) => row.get('q').properties);
      res.status(200).json({
        status: 'success',
        data: questions,
      });
    }
  } catch (e) {
    console.log(e.message);
  }
}
