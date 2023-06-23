import { executeWrite } from '@/utils/neo4j';

export default async function handler(req, res) {
  try {
    if (req.method === 'DELETE') {
      const { id } = req.query;
      const query = 'MATCH(p:Post {id:$id}) DETACH DELETE p';
      const params = { id };
      const result = await executeWrite(query, params);
      res.status(200).json({
        status: 'success',
        message: 'post deleted',
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong', error: e });
  }
}
