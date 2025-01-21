"use client";
import { useState } from 'react';
import Success from './successMsg';
import ErrorCard from './errorCard';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const submitFeedback = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/contact-us`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject, message }),
        }
      );
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <section className="text-teal-100 py-12">
      <div className="max-w-3xl mx-auto p-8 rounded-xl shadow-xl bg-gray-900">
        <h2 className="text-5xl font-bold text-center text-teal-400">Contact Us</h2>
        <p className="mt-4 text-center text-gray-400">
          Have a question, suggestion, or need assistance? We’re here to help!
        </p>

        {status && (
          <div
            className={`mt-4 p-4 rounded-lg text-center text-sm font-medium ${
              status.type === 'success'
                ? 'bg-teal-500 text-teal-900'
                : 'bg-red-600 text-red-100'
            }`}
          >
            {status.message}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitFeedback();
          }}
          className="mt-8 space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-800 text-gray-100"
              placeholder="name@host.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-800 text-gray-100"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-800 text-gray-100"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-teal-500 rounded-lg font-medium hover:bg-teal-600 focus:ring-4 focus:ring-teal-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
