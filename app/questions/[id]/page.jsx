'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserCard from '@/components/userCard';
import parseDate from '@/utils/js-date';

const getQuestion = async (id) => {
  const res = await fetch(`/api/questions/${id}`);
  const data = await res.json();
  return data.data;
};
const getAnswers = async (id) => {
  const res = await fetch(`/api/questions/${id}/answers`);
  const data = await res.json();
  return data.data;
};

export default function QuestionById({ params }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [state, setState] = useState('ok');

  useEffect(
    () => async () => {
      const data1 = await getQuestion(params.id);
      const data2 = await getAnswers(params.id);
      setQuestion(data1);
      setAnswers(data2);
    },
    [params.id, state]
  );
  // refresh the page
  const refreshPage = () => {
    setState('refresh');
    router.refresh();
  };

  async function postAnswer(e) {
    const answer = e.target.answer.value;
    const res = await fetch(`/api/questions/${params.id}`, {
      method: 'post',
      body: JSON.stringify({ userId: session?.user.id, answer }),
      headers: { 'content-type': 'application/json' },
    });
    if (res.ok) {
      refreshPage();
      alert('answer posted successfully!');
      e.target.answer.value = '';
    } else alert('some error occurred.. try again');
  }

  return (
    <section className='container mx-auto'>
      <div className=' p-6 bg-slate-50 relative mb-8'>
        <h1 className='text-3xl font-medium text-neutral-600 mb-4'>
          {question.title}
        </h1>
        <p>{question.description}</p>
        <p className='absolute right-6 bottom-2 text-slate-700'>
          <span className='text-slate-500'> Asked on {question.createdAt}</span>
        </p>
      </div>
      <div>
        <h1 className='heading-2'>Answers</h1>
        {answers.map((ans) => (
          <div key={ans.id} className='bg-stone-50 shadow-sm p-2 rounded my-6'>
            <h1 className='text-2xl font-normal text-neutral-700'>
              {ans.answer}
            </h1>
            <div className=' w-1/2 mr-4 text-sm text-gray-400 mt-4'>
              <UserCard name={ans.user} image='/user/user.png' />
              <span className='pt-4'>Answered {ans.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
      <div className=''>
        <h1 className='text-2xl font-medium text-slate-600 mb-2'>
          Your answer
        </h1>
        <form
          action='#'
          onSubmit={(e) => {
            e.preventDefault();
            postAnswer(e);
          }}
        >
          <textarea
            name='answer'
            rows='7'
            placeholder='Write your answer here...'
            className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-1/2 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-700 focus:outline-none'
          ></textarea>
          <input
            type='submit'
            value='Post Answer'
            className=' inline-block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-30 shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-lg text-md px-4 py-1 text-center mr-2 mt-4 '
          />
        </form>
      </div>
    </section>
  );
}
