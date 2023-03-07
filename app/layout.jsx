'use client';
import { SessionProvider } from 'next-auth/react';

import Footer from '../components/footer';
import './globals.css';
import NavBar from '../components/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <SessionProvider>
          <NavBar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
