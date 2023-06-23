// get all posts of  a user
import { executeRead } from '@/utils/neo4j';
export default async function handler(req, res) {
  try {
    const { id } = req.body;
    if (!id) return res.status(200).json({});
    const query = `MATCH (p:Post)<-[:CREATE]-(u:User {id:$id}) return p LIMIT 30`;
    const params = { id };
    const result = await executeRead(query, params);
    const posts = result.map((row) => row.get('p').properties);
    console.log(id, posts);
    res.status(200).json({
      status: 'success',
      data: posts,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
