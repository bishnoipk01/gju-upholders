import bcrypt from 'bcryptjs';
import { executeWrite } from '@/utils/neo4j';

// register a new user and stores in database
export default async function register(req, res) {
  // extract info from request body
  const { name, email, password } = req.body;
  // encrypt user password
  const encryptedPassword = await bcrypt.hash(password, 10);
  // query that needs to be run on database
  const query = `
        MERGE(u:User { id: randomUuid(), name:$name, email:$email, password:$encryptedPassword, avatar:$avatar})
        RETURN u
        `;
  // parameters used in query
  const params = { name, email, encryptedPassword, avatar: 'default.png' };
  // run the query on database
  const result = await executeWrite(query, params);
  // extract user from data returned from database
  const user = result[0].get('u').properties;
  // send response to database
  res.status(200).json({
    status: 'success',
    data: user,
  });
}
