'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AskBg from '@/public/1.svg';
import Success from '@/components/successMsg';
import ErrorCard from '@/components/errorCard';

export default function NewQuestion() {
  const router = useRouter();
  const { data: session } = useSession();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleTag = (tag) => {
    setTags((prevTags) => 
      prevTags.includes(tag) 
        ? prevTags.filter(t => t !== tag) 
        : [...prevTags, tag]
    );
  };

  async function PostQuestion() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/questions/post-question`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            description,
            Uid: session.user.id,
            tags,
          }),
        }
      );
      const result = await res.json();
      if (res.ok) {
        setSuccessMessage('Your question has been posted successfully!');
        setErrorMessage(null);
        router.push('/questions');
      } else {
        setErrorMessage(result.message || 'Some error occurred, please try again.');
        setSuccessMessage(null);
      }
    } catch (error) {
      setErrorMessage('Network error, please try again later.');
      setSuccessMessage(null);
    }
  }

  return (
    <section
      className="container mx-auto bg-cover bg-center min-h-screen pt-6 mt-20"
      style={{ backgroundImage: `url(${AskBg.src})` }}
    >
      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-semibold text-center mb-6 text-teal-500">
          Ask a Public Question
        </h1>

        {successMessage && <Success message={successMessage} />}
        {errorMessage && <ErrorCard message={errorMessage} />}

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            PostQuestion();
          }}
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-md font-medium text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 text-white border border-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Title of the question"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-md font-medium text-white">
              Describe the Problem
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 text-white border border-teal-500 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Provide a detailed description of the issue you're facing"
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-lg font-medium text-teal-500 mb-4">Select Tags for Your Question</h2>
            <div className="flex flex-wrap gap-3">
              {['Programming', 'Technology', 'Placement', 'CodingQuestion', 'T&PCell'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${tags.includes(tag)
                    ? 'bg-teal-600 border-teal-500 text-white'
                    : 'bg-gray-700 border-gray-500 text-teal-500'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-6 bg-teal-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Post Question
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
