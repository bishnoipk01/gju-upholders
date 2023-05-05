'use client';

import { useState } from 'react';
import Success from './successMsg';
import ErrorCard from './errorCard';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitFeedback = async () => {
    const res = await fetch('/api/users/contact-us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, subject, message }),
    });
    const data = await res.json();
    if (res.ok) {
      <Success message={'message sent successfully'} />;
    } else <ErrorCard message={'something went wrong...'} />;
    console.log(data);
    setEmail('');
    setMessage('');
    setSubject('');
  };

  return (
    <section className='bg-white dark:bg-gray-900 bg-gradient-to-r from-indigo-300 to-purple-400'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='heading-1 text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-700 dark:text-gray-400 sm:text-xl'>
          Got a technical issue? Want to send feedback about a feature? Need
          details on any topic? Let us know.
        </p>
        <Success message={'message sent successfully'} />;
        <form
          action='#'
          className='space-y-8'
          onSubmit={(e) => {
            e.preventDefault();
            submitFeedback();
          }}
        >
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='name@host.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Let us know how we can help you'
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='6'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Leave a comment...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <input
            type='submit'
            className='inline-block py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            value={'Send Message'}
          />
        </form>
      </div>
    </section>
  );
}
