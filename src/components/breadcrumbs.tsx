'use client';

import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Slash} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton";
import {usePathname} from "next/navigation";

const Breadcrumbs = ({loading = true}: { loading?: boolean }) => {
    const pathname = usePathname();
    const paths = pathname.split( '/' ).filter( Boolean );

    return (
        <div className="h-5 min-w-64 hidden sm:flex justify-start items-center mb-8 xl:mb-16">
            <div className="w-fit">
                {loading ? (
                    <Skeleton className="h-3 w-full min-w-64 bg-gray-200 rounded-full"/>
                ) : (
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            {paths && paths.map( (path: string, index: number) => {
                                const isListItem = index === paths.length - 1;
                                const pageURL = `/${paths.slice( 0, index + 1 ).join( '/' )}`;
                                const pageName = `${path.charAt( 0 ).toUpperCase()}${path.slice( 1 )}`;
                                const pageTitle = pageName.replace( '-', ' ' );

                                return (
                                    <React.Fragment key={index}>
                                        {isListItem ? (
                                            <>
                                                <BreadcrumbSeparator>
                                                    <Slash/>
                                                </BreadcrumbSeparator>
                                                <BreadcrumbItem>
                                                    <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                                                </BreadcrumbItem>
                                            </>
                                        ) : (
                                            <>
                                                <BreadcrumbSeparator>
                                                    <Slash/>
                                                </BreadcrumbSeparator>
                                                <BreadcrumbItem>
                                                    <BreadcrumbLink href={pageURL}>
                                                        <span>{pageTitle}</span>
                                                    </BreadcrumbLink>
                                                </BreadcrumbItem>
                                            </>
                                        )}

                                    </React.Fragment>
                                )
                            } )}
                        </BreadcrumbList>
                    </Breadcrumb>
                )}
            </div>
        </div>
    );
};

export default Breadcrumbs;
