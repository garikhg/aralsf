'use client';

import React from 'react';
import { Footer, Header } from '@/_components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/lib/apolloClient';
import '../styles/globals.scss';
import "../config/fonts";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const apolloClient = useApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <html lang="en" suppressHydrationWarning={true}>

      <body>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
    </ApolloProvider>
  );
}
