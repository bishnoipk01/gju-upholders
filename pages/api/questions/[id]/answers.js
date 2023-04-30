import parseDate from '@/utils/js-date';
import { executeRead } from '@/utils/neo4j';

export default async function getAnswersToQuestion(req, res) {
  try {
    const { id } = req.query;
    const query =
      'MATCH((q:Question {id:$id})<-[r:ANSWER]-(u:User)) return r.answer AS ans, r.created_at as created, u.name as name, u.id as id, u.avatar as avatar';
    const params = { id };
    const result = await executeRead(query, params);
    const data = result.map((row) => {
      return {
        id: row.get('id'),
        user: row.get('name'),
        answer: row.get('ans'),
        createdAt: parseDate(row.get('created')).toDateString(),
        avatar: row.get('avatar'),
      };
    });
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
