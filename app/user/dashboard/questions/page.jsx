'use client';
import ErrorCard from '@/components/errorCard';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loading from './loading';

const getQuestions = async (id) => {
  try {
    if (id === undefined) return null;
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
    if (res.status !== 200) {
      return null;
    }
    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default function QuestionAsked() {
  const { data: session } = useSession();
  const [questions, setQuestions] = useState(null);  // Initially set to null
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (session?.user.id) {
      getQuestions(session.user.id)
        .then((questions) => {
          setQuestions(questions);
          setIsLoading(false);
        });
    }
  }, [session]);

  const refreshPage = () => {
    setIsLoading(true); // Show loading while fetching
    router.refresh();
  };

  const deleteQuestion = async (id) => {
    setIsLoading(true); // Show loading while deleting
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/questions/${id}`, {
      method: 'DELETE',
    });
    refreshPage();
  };

  if (isLoading) {
    return <Loading />
    }

  return (
   <div className="w-full bg-gray-800 text-white">
  <div className="z-10 top-0 h-16 border-b border-gray-700 py-2.5">
    <div className="px-6 flex items-center justify-between space-x-4">
      <h5 hidden className="text-3xl font-bold lg:block">Questions Asked</h5>
    </div>
  </div>
  <div className="min-h-[80vh] bg-transparent">
    {questions ? (
      ""
    ) : (
      <ErrorCard message={`\tUnable to load data, try again.`} />
    )}
    {questions.length ? (
      questions.map((question) => (
        <div
          key={question.id}
          className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow my-6 w-full lg:w-3/4 ml-4 flex justify-between flex-col lg:flex-row"
        >
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {question.title}
            </h5>
            <p className="font-normal text-gray-400">
              {question.description?.substring(0, 100)}
            </p>
          </div>
          <div className="p-4">
            <button
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md mr-2"
              onClick={deleteQuestion.bind(this, question.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    ) : (
      <ErrorCard message={"\tNo data found"} />
    )}
  </div>
</div>

  );
}
