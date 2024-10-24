import React from 'react';
import {Metadata} from 'next';
import {Inter, Belleza} from 'next/font/google';
import '../styles/globals.scss';
import '../constants/fonts';
import {Header} from "@/components";
import {ThemeProvider} from "@/components/theme/theme-provider";
import {SWRProvider} from "@/providers/swr-provider";
import {settings} from "@/config/settings";
import Footer from "@/components/footer";
import {cn} from "@/lib/utils";

export const metadata: Metadata = {
    title: settings.siteTitle,
    description: settings.siteDescription,
};

const belleza = Belleza( {
    weight: ['400'],
    style: "normal",
    subsets: ['latin'],
    variable: "--font-belleza-sans",
    display: "swap"
} );

const inter = Inter( {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: "normal",
    subsets: ["latin"],
    variable: "--font-inter-sans"
} );

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn(
            'leading-7 bg-background antialiased',
            inter.className, belleza.variable, inter.variable,
        )}>
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
