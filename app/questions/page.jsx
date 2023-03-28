'use client';
import ErrorCard from '@/components/errorCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const getQuestions = async () => {
  try {
    const res = await fetch('/api/questions/get-all', { cache: `no-cache` });
    const questions = await res.json();
    if (res.status !== 200) return null;
    return questions.data;
  } catch (err) {
    console.log(err);
  }
};

export default function Questions() {
  const [ques, setQues] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(
    () => async () => {
      const data = await getQuestions();
      setQues(data);
    },
    []
  );

  //Our search filter function
  const searchFilter = (array) => {
    if (array.length > 0 && query) {
      return array.filter((el) => el.tags.includes(query));
    } else return array;
  };

  const filtered = searchFilter(ques);

  return (
    <section className='container mx-auto mt-10'>
      <div className='flex justify-between'>
        <h1 className='heading-3'>All Questions</h1>
        <Link href={'/questions/new-question'} className='btn-1'>
          Ask a Question
        </Link>
      </div>
      <ul className='flex flex-col sm:flex-row'>
        <span className='text-lg mt-2 mr-4'>Filter:</span>

        <button onClick={(e) => setQuery('')}>
          <li
            className={`inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
              query === '' ? 'bg-green-100' : ''
            }`}
          >
            All
          </li>
        </button>
        <button>
          <li
            className={`inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white  ${
              query === '#code' ? 'bg-green-100' : ''
            }`}
            onClick={(e) => setQuery(e.target.textContent)}
          >
            #code
          </li>
        </button>
        <button onClick={(e) => setQuery(e.target.textContent)}>
          <li
            className={`inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white  ${
              query === '#Prog' ? 'bg-green-100' : ''
            }`}
          >
            #Prog
          </li>
        </button>
      </ul>
      {ques ? '' : <ErrorCard message={`\tUnable to load data try again..`} />}
      {ques.length ? (
        ''
      ) : (
        <ErrorCard message={`\tNo data found .. Try asking a question`} />
      )}
      {filtered.map((question) => {
        return (
          <Link
            href={`/questions/${question.id}`}
            key={question.id}
            className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-6'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {question.title}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {question.description?.substring(0, 100)}
            </p>
          </Link>
        );
      })}
    </section>
  );
}
