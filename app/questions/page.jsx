'use client';
import ErrorCard from '@/components/errorCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Questions() {
  const [ques, setQues] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const getQuestions = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/questions/get-all`,
        {
          cache: `no-cache`,
        }
      );
      const questions = await res.json();
      if (res.status !== 200) return null;
      setQues(questions.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  // Our search filter function
  const searchFilter = (array) => {
    if (array.length > 0 && query) {
      return array.filter((el) => el.tags.includes(query));
    } else return array;
  };

  const filtered = searchFilter(ques);
  return (
<section className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8 bg-gray-800 ">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-semibold text-white">All Questions</h1>
    <Link
      href={'/questions/new-question'}
      className="btn-1 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-all"
    >
      Ask a Question
    </Link>
  </div>

  <div className="mb-8">
    <span className="text-lg font-medium text-gray-300">Filter by Tags:</span>
    <ul className="flex flex-wrap gap-4 mt-4">
      {['All', '#Programming', '#Technology', '#Placement', '#CodingQuestion', '#T&PCell'].map((tag) => (
        <button
          key={tag}
          onClick={() => setQuery(tag === 'All' ? '' : tag)}
          className={`inline-flex items-center gap-2.5 px-4 py-2 text-sm font-medium border rounded-full ${
            query === tag
              ? 'bg-teal-500 text-white border-teal-600'
              : 'bg-gray-700 text-white border-gray-600'
          } hover:bg-teal-600 hover:text-white transition-all`}
        >
          {tag}
        </button>
      ))}
    </ul>
  </div>

  {/* Error handling */}
  {ques === null ? (
    <ErrorCard message="Unable to load data. Please try again later." />
  ) : (
    ''
  )}

  {/* Display questions or loading/error message */}
  {ques.length ? (
    filtered.map((question) => {
      return (
        <Link
          href={`/questions/${question.id}`}
          key={question.id}
          className="block bg-gray-800 text-white p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-gray-700"
        >
          <h5 className="text-xl font-semibold text-white mb-2">{question.title}</h5>
          <p className="text-gray-400">{question.description?.substring(0, 100)}...</p>
          <div className="mt-4 flex items-center space-x-3">
            <span className="text-sm text-teal-500"># {question.tags.join(' #')}</span>
          </div>
        </Link>
      );
    })
  ) : loading ? (
    <div className="text-lg text-gray-400">Loading...</div>
  ) : (
    <ErrorCard message="No questions found." />
  )}
</section>

  );
}
