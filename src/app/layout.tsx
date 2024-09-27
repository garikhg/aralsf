'use client';

import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {useApollo} from '@/lib/apolloClient';
import '../styles/globals.scss';
import '../constants/fonts';
import {Footer, Header} from "@/components";
import {ThemeProvider} from "@/components/theme/theme-provider";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const apolloClient = useApollo();
    return (
        <ApolloProvider client={apolloClient}>
            <html lang="en" suppressHydrationWarning>
            <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <div className="min-h-screen flex flex-col">
                    <Header/>
                    <main>{children}</main>
                    <Footer/>
                </div>
            </ThemeProvider>
            </body>
            </html>
        </ApolloProvider>
    );
}
