import React from 'react';
import Image from 'next/image';
import {Product} from "@/lib/types";
import {Heading5} from "@/components/ui/heading";
import ProductPlaceholder from "@/components/products/product-placeholder";

interface ProductCardProps {
    data: Product;
}

const getProductSubtitle = (title: string) => {
    return (
        <h5 className="flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-300">
            <span dangerouslySetInnerHTML={{__html: title}}/>
        </h5>
    )
}

const getAttribute = (label: string, value: string) => {
    if (!value) return false;

    return (
        <>
            <span className="inline-block text-nowrap">{label}</span>
            <span className="w-full block h-px bg-gray-200"></span>
            <span className="inline-block text-nowrap text-end">{value}</span>
        </>
    )
}

const ProductCard: React.FC<ProductCardProps> = ({data}: { data: any }) => {
    const title = data?.title?.rendered ?? '';
    const featuredMedia = data?._embedded?.['wp:featuredmedia']?.[0] ?? null;
    const {sku, bottle_size, bottles_per_case, alcohol_volume, color, type, short_description} = data?.acf || {};

    const addAttributes: any = data?.acf?.attribute ?? '';

    const baseAttributes = [
        {name: 'Bottle Size', value: bottle_size},
        {name: 'Bottles per case', value: bottles_per_case},
        {name: 'Alcohol', value: alcohol_volume ? `${alcohol_volume}%` : ''},
        {name: 'Color', value: color},
        {name: 'Type', value: type},
    ] as const;
    return (
        <div className="block rounded-lg bg-white dark:bg-neutral-700 p-4">
            {featuredMedia ? (
                /* Card image */
                <Image
                    src={featuredMedia.source_url}
                    alt={featuredMedia.title.rendered}
                    width={290}
                    height={384}
                    priority
                    className="block w-full max-w-full h-96 object-contain rounded-t-lg"
                />
            ) : (
                <ProductPlaceholder/>
            )}

            {/* Card header */}
            <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                {short_description && getProductSubtitle( short_description )}
            </div>

            {/* Card body */}
            <div className="pt-6">
                <Heading5 className="leading-tight font-bold text-base">
                    <span dangerouslySetInnerHTML={{__html: title}}></span>
                </Heading5>

                <div className="text-start pt-4">
                    {sku && (
                        <p className="flex flex-1 items-baseline justify-between gap-3 py-0.5">
                            {getAttribute( 'SKU', sku )}
                        </p>
                    )}

                    {/* Base Attributes */}
                    {baseAttributes && baseAttributes.map( (baseAttribute: any, index: number) => (
                        <p className="flex flex-1 items-baseline justify-between gap-3 py-0.5" key={index}>
                            {getAttribute( baseAttribute.name, baseAttribute.value )}
                        </p>
                    ) )}

                    {/* Additional Attribute */}
                    {addAttributes && addAttributes.map( (attribute: any, index: number) => (
                        <p className="flex flex-1 items-baseline justify-between gap-3 py-0.5" key={index}>
                            {getAttribute( attribute.name, attribute.value )}
                        </p>
                    ) )}
                </div>
            </div>
        </div>
    );
};

ProductCard.displayName = 'ProductCard';
export {ProductCard};
