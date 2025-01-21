'use client';

import { SessionProvider } from 'next-auth/react';
import './globals.css';
import NavBar from '../components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NavBar />
          <main>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
