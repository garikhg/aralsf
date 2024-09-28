import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "@/components/ui/button";


const getCatLink = (name: string, slug: string, count: number) => (
    <>
        {count > 0 ? (
            <Link href={`/product-category/${slug}`}
                  className="inline-block leading-tight after:h-px after:block after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-200"
            >
                <span>See all products</span>
            </Link>
        ) : (
            <Button
                className="text-white px-0"
                variant="link"
                disabled={true}
            >
                <span>Not Available Products</span>
            </Button>
        )}
    </>
)

const CategoryCard = ({data}: { data: any }) => {
    const {name, description, slug, count} = data;
    const {url: thumbnailUrl, alt} = data?.acf?.thumbnail;
    const altName = !alt ? name : alt;

    return (
        <div className="relative overflow-hidden rounded-lg min-h-[468px]">
            {thumbnailUrl &&
                <div className="w-full h-full relative top-0 left-0 z-0">
                    <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/70 to-black/10 z-[5]"></span>
                    <Image
                        src={thumbnailUrl}
                        alt={altName}
                        width={720}
                        height={776}
                        priority
                        className="w-full h-full blank object-cover max-w-full z-0"
                    />
                </div>
            }
            <div className="absolute bottom-0 w-full text-primary-foreground p-8 mt-auto">
                {name && <h3 className="block scroll-m-20 text-2xl font-semibold tracking-tight mb-3">{name}</h3>}
                {description && <div className="min-h-20 pb-6"><p dangerouslySetInnerHTML={{__html: description}} className="leading-6"/></div>}
                {getCatLink( name, slug, count )}
            </div>
        </div>
    );
};


CategoryCard.displayName = 'CategoryCard';

export {CategoryCard};
