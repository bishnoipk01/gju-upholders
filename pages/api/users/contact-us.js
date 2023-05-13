import { executeWrite } from '@/utils/neo4j';

export default async function handler(req, res) {
  try {
    const { email, subject, message } = req.body;
    const query = `MERGE(n:Feedback {email:$email, subject:$subject, message:$message}) return n`;
    const params = { email, subject, message };
    const result = await executeWrite(query, params);
    res
      .status(200)
      .json({ status: 'success', data: result[0].get('n').properties });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
}
