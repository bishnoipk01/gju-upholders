import catchAsync from '../utils/catchAsync.js';
import { executeWrite, executeRead } from '../middlewares/neo4j.js';

export const getAllQuestions = catchAsync(async (req, res, next) => {});

// post a new question and store in database
export const postNewQuestion = catchAsync(async (req, res, next) => {
  // get params from req body
  const { title } = req.body;
  // query to post question
  const query = `
            MATCH(u:User {id:$id})
            MERGE(q:Question {id: randomUuid(), title: $title}) 
            MERGE((u)-[r:ASK]->(q))
            RETURN q`;
  //  parameter that used in query
  const params = { title, id: req.user.id };
  // await the result from executeWrite query
  const result = await executeWrite(query, params);
  // send response back to client
  res.status(201).json({
    status: 'success',
    question: result[0].get('q').properties,
  });
});

// controller function to post a answer to given question
export const postAnswer = catchAsync(async (req, res, next) => {
  // get question from req params and answer from request body
  const questionId = req.params.id;
  const { answer } = req.body;
  const query = `MATCH(u:User {id:$uId})
                MATCH(q:Question {id: $qId})
                MERGE((u)-[r:ANSWER]->(q))
                SET r.answer = $answer
                RETURN q,r.answer;
  `;
  const params = { uId: req.user.id, qId: questionId, answer };
  const result = await executeWrite(query, params);
  res.status(201).json({
    status: 'success',
    data: {
      question: result[0].get('q').properties,
      answer: result[0].get('r.answer'),
    },
  });
});

// to get all answers to a question
export const getAnswersToQuestion = catchAsync(async (req, res, next) => {
  const qId = req.params.id;
  const query = `MATCH((q:Question {id:$qId})<-[r:ANSWER]-(u)) return q.title,r.answer,u.name,u.id`;
  const params = { qId };
  const result = await executeRead(query, params);
  const answers = result.map((row) => {
    return {
      answer: row.get('r.answer'),
      userId: row.get('u.id'),
      postedBy: row.get('u.name'),
    };
  });
  res.status(200).json({
    status: 'success',
    data: {
      question: result[0].get('q.title'),
      answers,
    },
  });
});
