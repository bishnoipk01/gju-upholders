'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useState,useEffect } from 'react';
import { useToast } from '@/utils/Toast';

export default function Dashboard() {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [avatar, setAvatar] = useState('/default.png');
  const { showToast } = useToast();

  const getAvatar = async () => {
    try {
      if (session) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/get-user`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid: session.user.id }),
          }
        );
        const data = await res.json();
        console.log(data);
        setAvatar(`/users/${data.data.avatar}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  console.log(preview)
  console.log(avatar)
    useEffect(() => {
      getAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadAvatar = async () => {
    if (!selectedFile) {
      showToast('No file selected', 'red');
      return;
    }
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('Uid', session?.user?.id || '');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/upload-photo`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        showToast('Photo uploaded successfully!', 'green');
        setSelectedFile(null);
        setPreview(null);
      } else {
        showToast('Error uploading photo', 'red');
      }
    } catch (error) {
      showToast('An unexpected error occurred', 'red');
    }
  };

  return (
    <div className="relative h-screen bg-gray-800">
      {/* Space for Navbar */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-transparent" />

      {/* Dashboard Content */}
      <section className="absolute top-20 left-0 right-0 flex justify-center items-start">
        <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
            Welcome, {session?.user?.name || 'User'}!
          </h1>
          <p className="text-gray-400 text-sm text-center">
            Customize your profile and make it your own.
          </p>

          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Profile Picture */}
            <div className="relative">
              <Image
                src={preview || avatar}
                alt="User Avatar"
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover border-4 border-teal-500 shadow-md"
              />
            </div>

            {/* File Input */}
            <div className="w-full">
              <label
                htmlFor="file-input"
                className="block text-sm font-medium text-gray-300 text-center mb-2"
              >
                Update Profile Picture
              </label>
              <input
                id="file-input"
                type="file"
                className="block w-full text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg shadow focus:ring-teal-500 focus:border-teal-500 file:cursor-pointer file:mr-2 file:py-1 file:px-3 file:rounded-md file:bg-teal-600 file:text-white file:font-medium hover:file:bg-teal-700"
                onChange={handleFileChange}
                aria-label="Upload profile picture"
              />
            </div>

            {/* Upload Button */}
            {preview && (
              <button
                onClick={uploadAvatar}
                className="w-full mt-3 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Upload Photo
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
