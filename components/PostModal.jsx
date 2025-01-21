'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function PostModal({ loadData }) {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [checkFile, setCheckFile] = useState(false);
  const [caption, setCaption] = useState('');
  const [avatar, setAvatar] = useState('default.png');

  // Handle image file selection
  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  // Fetch user data to get the avatar image
  useEffect(() => {
    if (session) {
      const fetchUserData = async () => {
        try {
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
          setAvatar(data.data.avatar);
        } catch (err) {
          console.error('Error fetching user data:', err);
        }
      };
      fetchUserData();
    }
  }, [session]);

  // Handle post upload
  const uploadPost = async (e) => {
    e.preventDefault();
    try {
      if (!checkFile) return alert('Please select a file');

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('caption', caption);
      formData.append('Uid', session.user.id);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/new-post`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert('New post added successfully');
        setShowModal(false); // Close the modal
        loadData(); // Reload the data
        setSelectedFile(null); // Clear the selected file
        setCaption(''); // Clear caption
      } else {
        alert('Something went wrong. Please try again.');
        console.error('Error Response:', data);
      }
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  };

  return (
    <>
      {/* Input Section to Open Modal */}
      <div
        id="input-post"
        className="p-4 shadow-lg flex bg-gray-800 rounded-lg text-white cursor-pointer hover:bg-gray-700 transition"
        onClick={() => setShowModal(true)} // Open modal on clicking the container
      >
        <Image
          className="w-12 h-12 rounded-full mr-4"
          src={`/users/${avatar}`}
          alt="User Avatar"
          width={60}
          height={60}
        />
        <input
          type="text"
          className="bg-gray-700 text-gray-400 text-sm rounded-lg block w-full p-3 cursor-pointer"
          placeholder="What do you want to share?"
          readOnly // Prevent text input but keep clickable
          onClick={() => setShowModal(true)} // Open modal on clicking the input
          aria-label="Create a post"
        />
      </div>

      {/* Modal Section */}
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-lg shadow-lg w-full bg-gray-900 text-white">
                <div className="flex items-start justify-between p-6 border-b border-gray-700 rounded-t">
                  <h3 className="text-2xl font-semibold">Create Post</h3>
                  <button
                    aria-label="Close Modal"
                    className="p-2 bg-transparent text-white hover:text-gray-300 text-2xl"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-gray-200">×</span>
                  </button>
                </div>

                {/* Form to Upload Post */}
                <form onSubmit={uploadPost} className="p-6">
                  <textarea
                    className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none resize-none"
                    rows="4"
                    placeholder="Write your thoughts..."
                    onChange={(e) => setCaption(e.target.value)}
                    value={caption}
                    aria-label="Write post caption"
                  ></textarea>

                  {/* Selected Image Preview */}
                  <div className="mt-4 flex justify-center">
                    {selectedFile && (
                      <Image
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected image preview"
                        width={300}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    )}
                  </div>

                  {/* File Input and Submit Button */}
                  <div className="flex justify-between items-center p-4 border-t border-gray-700 rounded-b">
                    <div className="flex items-center space-x-4">
                      <label
                        htmlFor="file-input"
                        className="cursor-pointer text-gray-400 hover:text-gray-300"
                        aria-label="Select image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        type="file"
                        id="file-input"
                        className="hidden"
                        onChange={imageHandler}
                        aria-label="Upload image"
                      />
                    </div>
                    <button
                      className="bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition"
                      type="submit"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Modal Overlay */}
          <div className="opacity-50 fixed inset-0 bg-black"></div>
        </>
      )}
    </>
  );
}
