'use client';
import { SessionProvider } from 'next-auth/react';

import Footer from '../components/footer';
import './globals.css';
import NavBar from '../components/navbar';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import GlobalError from './global-error';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <SessionProvider>
          <ErrorBoundary fallback={<GlobalError />}>
            <NavBar />
            {children}
            <Footer />
          </ErrorBoundary>
        </SessionProvider>
      </body>
    </html>
  );
}
