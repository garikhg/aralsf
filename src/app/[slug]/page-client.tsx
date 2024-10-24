'use client';
import React from 'react';
import {usePage} from "@/hooks/use-pages";
import {Skeleton} from "@/components/ui/skeleton";
import {Heading1} from "@/components/ui/heading";
import PageBreadcrumb from "@/components/page-breadcrumb";
import PageHeader from "@/components/page-header";

const PageClient = ({slug}: { slug: string }) => {
    const {page, isError, isLoading} = usePage( slug );

    if (isLoading) {
        return (
            <div>
                <Skeleton className="bg-gray-100 h-[360px] lg:h-[480px] rounded-lg mb-6"/>
                <Skeleton className="bg-gray-200 h-3 w-32 rounded-full mb-6"/>
                Loading
            </div>
        )
    }

    const title = page?.title.rendered || '';
    const description = page?.acf.description || '';
    const featuredMedia = page?._embedded?.['wp:featuredmedia'][0] ?? '';
    // @ts-ignore
    const featuredMediaURL = featuredMedia?.source_url ?? '';

    return (
        <>
            <PageHeader data={page}/>
            <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
                <PageBreadcrumb loading={false}/>
            </div>
        </>
    );
};

export default PageClient;
