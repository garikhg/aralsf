'use client';
import {SWRConfig} from 'swr';
import React from "react";
import {fetcher} from "@/lib/fetcher";

export const SWRProvider = ({children}: { children: React.ReactNode }) => {
    return <SWRConfig value={{
        fetcher: fetcher,
        onError: (error) => {
            console.error( 'SWR Error:', error )
        }
    }}
    >
        {children}
    </SWRConfig>
};
