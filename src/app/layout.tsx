'use client';

import React from 'react';
import { Footer, Header } from '@/_components';
import { fontInter, fontMerriweather } from '@/config/fonts';
import { cn } from '@/lib/utils';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/lib/apolloClient';
import '../styles/globals.scss';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const apolloClient = useApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <html lang="en" suppressHydrationWarning={true}>

      <body className={cn( fontInter.className, fontMerriweather.variable )}>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
    </ApolloProvider>
  );
}
