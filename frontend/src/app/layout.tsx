import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {BrandLogo} from "@/_components/Brand";
import NextLink from "next/link";
import {Button} from "@/components/ui/button";
import {Search} from "lucide-react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <header className="bg-primary" role="main">
            <div className="container flex justify-between items-center">
                <div className="flex items-center mr-auto">
                    <NextLink href="/">
                        <BrandLogo/>
                    </NextLink>
                </div>
                <div className="text-primary-foreground">Navigation</div>
                <div>
                    <Button variant="default" size="default"
                            className="h-14 w-14 p-4 text-primary-foreground hover:text-primary-foreground/90">
                        <Search size={24}/>
                        <span className="sr-only">Search</span>
                    </Button>
                </div>
            </div>
        </header>
        <main className="container" role="main">
            {children}
        </main>
        <footer>
            <div className="container">Footer</div>
        </footer>
        </body>
        </html>
    );
}
