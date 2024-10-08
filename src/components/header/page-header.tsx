import React from 'react';
import Image from 'next/image';
import {Heading1, Heading2} from '@/components/ui/heading';
import {cn} from "@/lib/utils";

const PageHeader = ({data}: { data?: any }) => {
    // Heading
    const title = data?.title?.rendered || '';
    const description = data?.acf?.description || '';

    // Featured Media
    const featuredMedia = data?._embedded?.['wp:featuredmedia']?.[0] || '';
    const srcUrl = featuredMedia?.source_url || '';
    const altText = featuredMedia?.alt_text || '';
    const hasFeaturedMedia = srcUrl ? true : false as boolean;

    return (
        <header className="relative page-header">
            {hasFeaturedMedia && (
                <>
                    <span className="absolute w-full h-full bg-gradient-to-t from-black/60 to-transparent"></span>
                    <Image
                        priority
                        src={srcUrl}
                        alt={altText}
                        width={featuredMedia?.media_details?.width}
                        height={featuredMedia?.media_details?.height}
                        className="block w-full h-[52vh] lg:h-[67vh] max-w-full border-none outline-none object-cover"
                    />
                </>
            )}

            <div className={cn(
                'h-full flex items-center',
                hasFeaturedMedia ? 'text-primary-foreground absolute top-0 left-0 right-0' : 'pt-20'
            )}>
                <div className="container py-16 lg:py-20">
                    <div className="max-w-2xl">
                        {hasFeaturedMedia
                            ? (<Heading1 className="mb-3 font-semibold">{title}</Heading1>)
                            : (<Heading2 className="mb-3 font-semibold">{title}</Heading2>)
                        }
                        {description && (
                            <div className="text-base md:text-lg"><p dangerouslySetInnerHTML={{__html: description}}/></div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
