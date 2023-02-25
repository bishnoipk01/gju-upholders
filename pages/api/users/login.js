import bcrypt from 'bcryptjs';
import { executeRead } from '@/utils/neo4j';

const checkPassword = async (candidatePassword, userPassword) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const AppError = (res, msg) => {
  res.status(401).json({
    status: 'error',
    message: msg,
  });
};

// login the user provided with correct credentials
export default async function login(req, res) {
  const { email, password } = req.body;
  // check user has email and password
  if (!email || !password)
    return AppError(res, 'Please Provide email and password');

  // getting user (if any) based on email
  const query = `MATCH(u:User {email:$email}) return u`;
  // parameter used in query
  const params = { email };
  // run the query on database
  const result = await executeRead(query, params);
  // if no result return error
  if (result.length === 0) return AppError(res, 'Invalid Email or Password');
  // get user from data
  const user = result[0].get('u').properties;
  // check if provided password is corrct or not
  if (!(await checkPassword(password, user.password)))
    return AppError(res, 'Invalid email or Password');

  // valid user, send token
  res.status(200).json({
    status: 'success',
    data: { user },
  });
}
