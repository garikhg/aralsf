import {Metadata} from "next";
import {getPageBySlug} from "@/lib/wordpress";
import React from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const pageData = await getPageBySlug( params.slug );
    const pageTitle = pageData[0]?.title?.rendered;

    return {
        title: pageTitle,
    }
}

const PageHeader = ({data}: { data?: any }) => {
    const title = data?.title?.rendered || '';
    const featuredMedia = data?._embedded?.['wp:featuredmedia'][0] || '';
    const srcUrl = featuredMedia?.source_url || '';
    const altText = featuredMedia?.alt_text || '';
    const hasFeaturedMedia = srcUrl ? true : false as boolean;

    return (
        <header className="relative page-header">
            {hasFeaturedMedia && (
                <Image
                    src={srcUrl}
                    alt={altText}
                    width={featuredMedia?.media_details?.width || 1728}
                    height={featuredMedia?.media_details?.height || 440}
                />
            )}

            <div className="h-full flex items-center text-center absolute top-0 left-0 right-0">
                <div className="container">
                    <h1 className={cn(
                        'text-6xl font-semibold',
                        hasFeaturedMedia ? ' text-white' : ''
                    )}>
                        {title}
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default async function Pages({params}: { params: { slug: string } }) {
    const getPageData = await getPageBySlug( params.slug );
    const pageData = getPageData ? getPageData?.[0] : {};

    const content = pageData?.content?.rendered || '';

    return (
        <div>
            <PageHeader data={pageData}/>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    );
}
