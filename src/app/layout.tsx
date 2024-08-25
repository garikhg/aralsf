'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/lib/apolloClient';
import '../styles/globals.scss';
import '../constants/fonts';
import RootContent from '@/app/root-conetnt';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const apolloClient = useApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <html lang="en" suppressHydrationWarning={true}>
      <body>
      <RootContent>{children}</RootContent>
      </body>
      </html>
    </ApolloProvider>
  );
}
