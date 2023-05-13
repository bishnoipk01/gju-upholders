import { executeWrite } from '@/utils/neo4j';

export default async function handler(req, res) {
  try {
    console.log(req.body);
    const { club, userId, comment } = req.body;
    const query = `MATCH(u:User {id:$userId})
               MATCH(c:Club {name:$club})
               MERGE((u)-[d:DISCUSS {id:randomUuid(),comment:$comment, created_at:datetime()}]->(c))   
               return c,d.comment as comment            
`;
    const params = { club, userId, comment };
    const result = await executeWrite(query, params);
    res.status(201).json({
      status: 'success',
      data: {
        club: result[0].get('c').properties,
        comment: result[0].get('comment'),
      },
    });
  } catch (e) {
    res.status(500).json({ status: 'error', message: e.message });
  }
}
