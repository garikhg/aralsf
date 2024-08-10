"use client";

import React from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import {SessionProvider} from "next-auth/react";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" data-lt-installed={true}>
        <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
            <SessionProvider>{children}</SessionProvider>
        </div>
        </body>
        </html>
    );
}
