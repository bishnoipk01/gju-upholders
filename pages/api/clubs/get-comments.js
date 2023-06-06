import parseDate from '@/utils/js-date';
import { executeRead } from '@/utils/neo4j';

export default async function handler(req, res) {
  try {
    const { club } = req.body;
    const query = `MATCH (u:User)-[d:DISCUSS]->(c:Club {name:$club})
                 return u.name as username, u.avatar as avatar ,d.id as id, d.comment as comment,d.created_at as created_at
  `;
    const params = { club };
    const result = await executeRead(query, params);
    const data = result.map((item) => {
      return {
        username: item.get('username'),
        comment: item.get('comment'),
        id: item.get('id'),
        avatar: item.get('avatar'),
        createdAt: parseDate(item.get('created_at')).toDateString(),
      };
    });
    res.status(200).json({ status: 'success', data });
  } catch (e) {
    res.status(500).json({ status: 'error', message: e.message });
  }
}
