import React from 'react';
import {Metadata} from "next";
import '../styles/globals.scss';
import '../constants/fonts';
import {Header} from "@/components";
import {ThemeProvider} from "@/components/theme/theme-provider";
import {SWRProvider} from "@/app/providers/swr-provider";
import {settings} from "@/config/settings";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: settings.siteTitle,
    description: settings.siteDescription,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="leading-7 antialiased bg-background">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <div className="min-h-screen flex flex-col">
                <SWRProvider>
                    <Header/>
                    <main>{children}</main>
                    <Footer/>
                </SWRProvider>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
