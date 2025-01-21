'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserCard from '@/components/userCard';
import parseDate from '@/utils/js-date';
import { useParams } from 'next/navigation';

const getQuestion = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions/${id}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch question');
    }
    return data.data;
  } catch (err) {
    console.error('Error fetching question:', err);
    throw err;  // Propagate error to be caught in useEffect
  }
};

const getAnswers = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions/${id}/answers`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch answers');
    }
    return data.data;
  } catch (err) {
    console.error('Error fetching answers:', err);
    throw err;  // Propagate error to be caught in useEffect
  }
};

export default function QuestionById() {
  const router = useRouter();
  const { data: session } = useSession();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState('ok');
  const [error, setError] = useState(null); // To track any error
  
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getQuestion(params.id);  // Access params.id after unwrapping
        const data2 = await getAnswers(params.id);
        setQuestion(data1);
        setAnswers(data2);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message || 'An error occurred while fetching data');
      }
    };
    fetchData();
  }, [params.id, state]);

  const refreshPage = () => {
    setState('refresh');
    router.refresh();
  };

  async function postAnswer(e) {
    e.preventDefault();
    const answer = e.target.answer.value;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/questions/${params.id}`,
        {
          method: 'POST',
          body: JSON.stringify({ userId: session?.user.id, answer }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (res.ok) {
        refreshPage();
        alert('Answer posted successfully!');
        e.target.answer.value = '';
      } else {
        alert('Error posting answer. Please try again.');
      }
    } catch (err) {
      alert('Error posting answer. Please try again.');
      console.error('Error posting answer:', err);
    }
  }

  return (
    <section className='container mx-auto'>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
          <div className="animate-spin rounded-full border-t-4 border-b-4 border-teal-400 border-solid h-16 w-16"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">
          <p>Error: {error}</p>
        </div>
      ) : (
        <>
          <div className='p-6 bg-slate-50 relative mb-8'>
            <h1 className='text-3xl font-medium text-neutral-600 mb-4'>{question?.title}</h1>
            <p>{question?.description}</p>
            <p className='absolute right-6 bottom-2 text-slate-700'>
              <span className='text-slate-500'>Asked on {parseDate(question?.createdAt)}</span>
            </p>
          </div>

          <div>
            <h1 className='heading-2'>Answers</h1>
            {answers.length > 0 ? (
              answers.map((ans) => (
                <div key={ans.id} className='bg-stone-50 shadow-sm p-2 rounded my-6'>
                  <h1 className='text-2xl font-normal text-neutral-700'>{ans.answer}</h1>
                  <div className='w-1/2 mr-4 text-sm text-gray-400 mt-4'>
                    <UserCard name={ans.user} image={`/users/${ans.avatar}`} />
                    <span className='pt-4'>Answered {parseDate(ans.createdAt)}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No answers yet.</p>
            )}
          </div>

          <div className=''>
            <h1 className='text-2xl font-medium text-slate-600 mb-2'>Your Answer</h1>
            <form onSubmit={postAnswer}>
              <textarea
                name='answer'
                rows='7'
                placeholder='Write your answer here...'
                className='focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-1/2 appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-700 focus:outline-none'
              ></textarea>
              <input
                type='submit'
                value='Post Answer'
                className='inline-block text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:outline-none focus:ring-teal-30 shadow-lg shadow-teal-500/50 dark:shadow-lg font-medium rounded-lg text-md px-4 py-1 text-center mr-2 mt-4'
              />
            </form>
          </div>
        </>
      )}
    </section>
  );
}
