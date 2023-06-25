'use client';
import ErrorCard from '@/components/errorCard';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const getQuestions = async (id) => {
  try {
    if (id === undefined) return [];
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/questions`,
      {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const questions = await res.json();
    if (res.status !== 200) return null;
    return questions.data;
  } catch (err) {
    console.log(err);
  }
};

export default function QuestionAsked() {
  const { data: session } = useSession();
  const [questions, setQuestions] = useState([]);
  const router = useRouter();
  const [state, setState] = useState(false);

  useEffect(() => {
    getQuestions(session?.user.id).then((questions) => {
      setQuestions(questions);
    });
  }, [state, session]);

  const refreshPage = () => {
    setState((state) => !state);
    router.refresh();
  };

  async function deleteQuestion(id) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions/${id}`, {
      method: 'DELETE',
    });
    refreshPage();
  }

  return (
    <div className=' w-full'>
      <div className=' z-10 top-0 h-16 border-b bg-white py-2.5'>
        <div className='px-6 flex items-center justify-between space-x-4 2xl:container'>
          <h5 hidden className='text-3xl text-blue-400 font-bold lg:block'>
            Questions
          </h5>
        </div>
      </div>
      <div className=' min-h-[80vh] bg-slate-100'>
        <h1 className='heading-3 p-4 rounded bg-slate-200'>
          All questions Asked
        </h1>
        {questions ? (
          ''
        ) : (
          <ErrorCard message={`\tUnable to load data try again..`} />
        )}
        {questions.length ? (
          questions.map((question) => {
            return (
              <div
                key={question.id}
                className='p-6 bg-white border border-gray-200 rounded-lg shadow my-6  w-full lg:w-3/4 ml-4 flex  justify-between flex-col lg:flex-row'
              >
                <div>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {question.title}
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                    {question.description?.substring(0, 100)}
                  </p>
                </div>
                <div className='bg-white p-4'>
                  <button
                    className='inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md mr-2'
                    onClick={deleteQuestion.bind(this, question.id)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      />
                    </svg>
                    <span className='hidden sm:block'>Delete</span>
                  </button>

                  {/* <button className='inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
                      />
                    </svg>
                    <span className='hidden sm:block'>Modify</span>
                  </button> */}
                </div>
              </div>
            );
          })
        ) : (
          <ErrorCard message={'\tno data found'} />
        )}
      </div>
    </div>
  );
}
