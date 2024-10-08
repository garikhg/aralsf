import React from 'react';
import {cn} from "@/lib/utils";

const Heading1 = ({children, className}: { children?: React.ReactNode, className?: string }) => {
    return (
        <h1 className={cn(
            'scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl',
            className
        )}>
            {children}
        </h1>
    );
};
Heading1.displayName = "Heading1";

const Heading2 = ({children, className}: { children?: React.ReactNode, className?: string }) => {
    return (
        <h2 className={cn(
            'scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0 lg:text-5xl',
            className
        )}>
            {children}
        </h2>
    );
};
Heading2.displayName = "Heading2";

const Heading3 = ({children, className}: { children?: React.ReactNode, className?: string }) => {
    return (
        <h3 className={cn(
            'scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl',
            className
        )}>
            {children}
        </h3>
    );
};
Heading3.displayName = "Heading3";

const Heading4 = ({children, className}: { children?: React.ReactNode, className?: string }) => {
    return (
        <h4 className={cn(
            'scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl',
            className
        )}>
            {children}
        </h4>
    );
};
Heading4.displayName = "Heading4";

const Heading5 = ({children, className}: { children?: React.ReactNode, className?: string }) => {
    return (
        <h5 className={cn(
            'scroll-m-20 text-xl font-semibold tracking-tight',
            className
        )}>
            {children}
        </h5>
    );
};
Heading5.displayName = "Heading5";

export {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5
};
