'use client';

import React from 'react';
import Breadcrumbs from "@/components/breadcrumbs";
import {Container} from "@/components/container";
import {useCategories, useProducts} from "@/hooks/use-pages";
import {Heading2, Heading3, Heading4} from "@/components/ui/heading";
import {Skeleton} from "@/components/ui/skeleton";
import ProductSkeleton from "@/components/products/product-skeleton";
import {ProductCard} from "@/components/products/product-card";
import {Product} from "@/lib/types";

// import {useCategories} from "@/hooks/use-pages";

// interface PageClientProps {
//     params: { slug: string };
//     searchParams?: { [key: string]: string | undefined };
// }

const PageClient = ({params, searchParams}: {
    params: { slug: string },
    searchParams: { [key: string]: string | undefined }
}) => {
    const {page: pageParams} = searchParams;
    const page = pageParams ? parseInt( pageParams, 10 ) : 1;
    const itemsPerPage = 12;

    // Category
    const {data, isLoading: catLoading, isError: categoryErorr} = useCategories( params.slug );
    const category = data ? data[0] : null;
    const catId: number | undefined = category?.slug !== 'all-products' ? category?.id : undefined;

    // Products
    const {
        products,
        isLoading: productsLoading,
        isError: productsError
    } = useProducts( catId, page, itemsPerPage );

    // Loading
    const isLoading = (productsLoading && catLoading);

    // Error
    if (productsError || categoryErorr) return <div className="container mx-auto px-4 py-8">Error loading page</div>;

    // const startItem = (page - 1) * itemsPerPage + 1;
    // const endItem = Math.min( page * itemsPerPage, totalItems )

    const categoryName = category?.name;

    return (
        <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
            <Breadcrumbs loading={isLoading}/>

            {!isLoading ? (
                <div className="h-14 flex items-center mb-6">
                    <Heading2 className="text-2xl tracking-tight lg:text-3xl font-bold">{categoryName}</Heading2>
                </div>
            ) : (
                <div className="h-14 w-32 flex items-center mb-6">
                    <Skeleton className="bg-gray-200 w-full h-5 rounded-full"/>
                </div>
            )}

            {!productsLoading ? products.length > 0 && (
                <div className="mb-6 h-6 flex items-center">
                    <p>Showing 1–12 of 2 item(s)</p>
                    {/*<span className="ml-2 text-gray-400">Page {currentPage} of {totalPages}</span>*/}
                </div>
            ) : (
                <div className="mb-6 h-6 flex items-center">
                    <Skeleton className="bg-gray-200 w-52 h-4 rounded-full"/>
                </div>
            )}

            {productsLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {Array( 12 ).fill( 0 ).map( (_, index) => (
                        <ProductSkeleton key={index}/>
                    ) )}
                </div>
            ) : (
                <>
                    {products && products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {products.map( (product: Product) => (
                                <ProductCard data={product} key={product.id}/>
                            ) )}
                        </div>
                    ) : (
                        <p>Products not found</p>
                    )}
                </>

            )}


        </div>
    );
};

export default PageClient;
