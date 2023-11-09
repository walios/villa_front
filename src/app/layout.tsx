'use client';
import { useEffect } from 'react';
import { Roboto } from 'next/font/google';
import '../style/globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  title: 'Villa Chouiter Center',
  description: 'Book now!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require('preline')
  }, [])

  return (
    <html lang="en">
      <body className={`relative ${roboto.className}`}>{children}</body>
    </html>
  );
}