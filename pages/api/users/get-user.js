import { executeRead } from '@/utils/neo4j';

export default async function handler(req, res) {
  try {
    const { uid } = req.body;
    console.log(uid);
    const query = `MATCH (u:User {id:$uid}) return u`;
    const params = { uid };
    const result = await executeRead(query, params);
    res
      .status(200)
      .json({ status: 'success', data: result[0].get('u').properties });
  } catch (e) {
    res.status(500).json({ status: 'error', message: e.message });
  }
}
