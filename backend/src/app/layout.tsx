"use client";

import React from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/_components/SessionWrapper";

const inter = Inter( {subsets: ["latin"]} );

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-lt-installed={true}>
        <body className={inter.className}>
        <SessionWrapper>
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </SessionWrapper>
        </body>
        </html>
    );
}
