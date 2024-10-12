'use client';
import {SWRConfig} from 'swr';
import React from "react";
import {fetchApi} from "@/lib/api";

export const SWRProvider = ({children}: { children: React.ReactNode }) => {
    return <SWRConfig value={{
        fetcher: fetchApi,
        onError: (error) => {
            console.error( 'SWR Error:', error )
        }
    }}
    >
        {children}
    </SWRConfig>
};
