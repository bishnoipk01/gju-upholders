import { executeRead } from '@/utils/neo4j';

export default async function getAllQuestions(req, res) {
  try {
    if (req.method === 'GET') {
      const query = `MATCH(b:Blog) return b LIMIT 30`;
      const result = await executeRead(query);
      const blogs = result.map((row) => row.get('b').properties);
      res.status(200).json({
        status: 'success',
        data: blogs,
      });
    }
  } catch (e) {
    console.log(e.message);
  }
}
