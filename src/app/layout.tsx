import React from 'react';
import '../styles/globals.scss';
import '../constants/fonts';
import {Footer, Header} from "@/components";
import {ThemeProvider} from "@/components/theme/theme-provider";
import {SWRProvider} from "@/app/providers/swr-provider";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="leading-7 antialiased bg-background">
        <SWRProvider>
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
        </SWRProvider>
        </body>
        </html>
    );
}
