import { executeRead } from '@/utils/neo4j';

export default async function getAnswersToQuestion(req, res) {
  try {
    const { id } = req.query;
    const query =
      'MATCH((q:Question {id:$id})<-[r:ANSWER]-(u)) return r.answer AS ans, u.name as name, u.id as id';
    const params = { id };
    const result = await executeRead(query, params);
    const data = result.map((row) => {
      return {
        id: row.get('id'),
        user: row.get('name'),
        answer: row.get('ans'),
      };
    });
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (e) {
    res.status(500).send('something went wrong');
  }
}
