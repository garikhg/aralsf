'use client';

// Task https://chatgpt.com/c/a6ab0738-0135-4ca4-bdcb-408f41ca4496

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/_components/SessionWrapper';
const inter = Inter( { subsets: ['latin'] } );

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" data-lt-installed={true}>
    <body className={inter.className}>
    <SessionWrapper>{children}</SessionWrapper>
    </body>
    </html>
  );
}
