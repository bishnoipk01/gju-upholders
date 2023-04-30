import { executeWrite } from '@/utils/neo4j';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/users');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  options.multiples = true;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      console.log(fields, files);
      resolve({ fields, files });
    });
  });
};
export default async function handler(req, res) {
  try {
    await fs.readdir(path.join(process.cwd() + '/public', '/users'));
    const data = await readFile(req, true);
    const values = {
      Uid: data.fields.Uid,
      avatar: data.files.avatar.newFilename,
    };
    const query = `
             MATCH(u:User {id:$Uid})
             SET u.avatar = $avatar
             RETURN u`;
    const params = {
      Uid: values.Uid,
      avatar: values.avatar,
    };
    const result = await executeWrite(query, params);
    res
      .status(201)
      .json({ status: 'success', data: result[0].get('u').properties });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 'error', message: e.message });
  }
}
