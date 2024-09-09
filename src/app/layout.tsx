'use client';

import React, {useEffect, useState} from 'react';
import {ApolloProvider} from '@apollo/client';
import {useApollo} from '@/lib/apolloClient';
import '../styles/globals.scss';
import '../constants/fonts';
import RootContent from '@/app/root-conetnt';
import {cn} from "@/lib/utils";
import {BrandLogo, Loading} from "@/components";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const apolloClient = useApollo();

    const [isLoading, setIsLoading] = useState( true );
    useEffect( () => {
        const timer = setTimeout( () => {
            setIsLoading( false );
        }, 18000 )

        return () => clearTimeout( timer );
    }, [] );

    return (
        <ApolloProvider client={apolloClient}>
            <html lang="en" suppressHydrationWarning={true}>
            <body className={cn( isLoading ? 'bg-primary' : '' )}>
            {isLoading ? <Loading/> : <RootContent>{children}</RootContent>}
            </body>
            </html>
        </ApolloProvider>
    );
}
