import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { HomeIcon, QuestionMarkCircleIcon, DocumentTextIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function AsideDash({ active }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: 'Home', icon: HomeIcon, href: '/user/dashboard' },
    { name: 'Questions', icon: QuestionMarkCircleIcon, href: '/user/dashboard/questions' },
    { name: 'Posts', icon: DocumentTextIcon, href: '/user/dashboard/posts' },
  ];

  return (
    <aside
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } h-screen bg-gray-800 text-white flex flex-col justify-between transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 text-gray-400 hover:text-white rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${collapsed ? 'rotate-180' : ''} transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-grow overflow-y-auto">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.name}>
            <div
              className={`flex items-center space-x-4 p-4 hover:bg-gray-800 cursor-pointer transition ${
                active === item.name ? 'bg-gray-700' : ''
              }`}
            >
              <item.icon className="h-6 w-6 text-gray-400" />
              {!collapsed && <span className="text-sm">{item.name}</span>}
            </div>
          </Link>
        ))}
      </nav>

      {/* Sign-Out Button */}
      <div className="p-4 border-t border-gray-800 mb-10">
        <button
          onClick={() => signOut()}
          className="w-full text-left text-sm text-red-400 hover:text-red-500 transition"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
