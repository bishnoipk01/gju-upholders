import parseDate from '@/utils/js-date';
import { executeRead } from '@/utils/neo4j';

export default async function GetAllPosts(req, res) {
  try {
    if (req.method === 'GET') {
      const query = `MATCH (p:Post)<-[r:CREATE]-(u:User) return p.id as id, p.caption AS caption,p.image AS image,p.created_at AS created,u.name AS username,u.avatar AS avatar`;
      const result = await executeRead(query);
      const posts = result.map((row) => {
        return {
          id: row.get('id'),
          caption: row.get('caption'),
          image: row.get('image'),
          createdAt: parseDate(row.get('created')).toDateString(),
          username: row.get('username'),
          avatar: row.get('avatar'),
        };
      });
      res.status(200).json({
        status: 'success!',
        data: posts,
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong', error: e });
  }
}
