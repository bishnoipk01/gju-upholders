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
    options.uploadDir = path.join(process.cwd(), '/public/images');
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
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + '/public', '/images'));

    const data = await readFile(req, true);
    const values = {
      caption: data.fields.caption,
      Uid: data.fields.Uid,
      image: data.files.image.newFilename,
    };

    const query = `
             MATCH (u:User {id:$Uid})
             MERGE (p:Post {id: randomUuid(), caption: $caption, image:$image, created_at: datetime()})
             MERGE (u)-[r:CREATE]->(p)
             RETURN p`;
    const params = {
      caption: values.caption,
      image: values.image,
      Uid: values.Uid,
    };
    // await the result from executeWrite query
    const result = await executeWrite(query, params);
    // send response back to client
    res.status(201).json({
      status: 'success',
      post: result[0].get('p').properties,
    });
  } catch (error) {
    // await fs.mkdir(path.join(process.cwd() + '/public', '/images'));
    res.status(500).json({ status: 'error', error });
  }
};

export default handler;
