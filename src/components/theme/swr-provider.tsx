'use client';
import {SWRConfig} from 'swr';
import React from "react";

export const SWRProvider = ({children}: { children: React.ReactNode }) => {
    return <SWRConfig>{children}</SWRConfig>
};
