import React from 'react';
import {Heading1} from "@/components/ui/heading";

const CategoriesHeader = ({data}: { data: any }) => {
    const title = data?.title.rendered || '';
    const description = data?.acf.description || '';
    const featuredMedia = data?._embedded?.['wp:featuredmedia'][0] ?? '';
    const featuredMediaURL = featuredMedia?.source_url ?? '';

    return (
        <div className="relative bg-gray-100 h-[360px] lg:h-[480px] rounded-lg overflow-hidden mb-6">
            {featuredMediaURL && (
                <span
                    className="block w-full h-full bg-no-repeat bg-center bg-cover"
                    style={{backgroundImage: `url('${featuredMediaURL}')`}}
                ></span>
            )}
            <div
                className="w-full h-full absolute flex items-center top-0 left-0 bg-gradient-to-t bg-black/40 to-transparent text-primary-foreground z-20">
                <div className="w-full max-w-screen-md text-center mx-auto p-8">
                    <Heading1 className="font-medium mb-2">
                        <span dangerouslySetInnerHTML={{__html: title}}/>
                    </Heading1>

                    {description && (
                        <div className="text-base py-3" dangerouslySetInnerHTML={{__html: description}}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoriesHeader;
