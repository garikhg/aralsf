'use client';

import React from 'react';
import PageBreadcrumb from "@/components/page-breadcrumb";
import {useCategories, useProducts} from "@/hooks/use-pages";
import {Heading2} from "@/components/ui/heading";
import {Skeleton} from "@/components/ui/skeleton";
import ProductSkeleton from "@/components/products/product-skeleton";
import {ProductCard} from "@/components/products/product-card";
import {Product} from "@/lib/types";
import PagePagination from "@/components/page-pagination";
import {usePathname, useRouter} from "next/navigation";
import ProductGrid from "@/components/products/product-grid";

const PageClient = ({params, searchParams}: {
    params: { slug: string },
    searchParams?: { [key: string]: string | undefined }
}) => {
    const router = useRouter();
    const pathname = usePathname();

    // Page Options
    const pageParams = searchParams?.page;
    const page = pageParams ? parseInt( pageParams, 10 ) : 1;
    const itemsPerPage = 12;

    // Category
    const {data, isLoading: catLoading, isError: categoryErorr} = useCategories( params.slug );
    const category = data ? data[0] : null;
    const catId: number | undefined = category?.slug !== 'all-products' ? category?.id : undefined;
    const categoryName = category?.name;

    // Products
    const {
        products,
        totalItems,
        totalPages,
        isLoading: productsLoading,
        isError: productsError
    } = useProducts( catId, page, itemsPerPage );

    // Loading
    const isLoading = (productsLoading && catLoading);

    // Error
    if (productsError || categoryErorr) return <div className="container mx-auto px-4 py-8">Error loading page</div>;

    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min( page * itemsPerPage, totalItems )

    const handlePageChange = (newPage: number) => {
        router.push( `${pathname}?page=${newPage}` );
    }

    return (
        <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
            <PageBreadcrumb loading={productsLoading}/>

            {!productsLoading ? (
                <div className="h-14 flex items-center mb-6">
                    <Heading2 className="text-2xl tracking-tight lg:text-3xl font-bold">{categoryName}</Heading2>
                </div>
            ) : (
                <div className="h-14 w-32 flex items-center mb-6">
                    <Skeleton className="bg-gray-200 w-full h-4 rounded-full"/>
                </div>
            )}

            {!productsLoading ? products.length > 0 && (
                <div className="mb-6 h-6 flex items-center">
                    <p className="text-gray-500">Showing {startItem}–{endItem} of {totalItems} item(s)</p>
                </div>
            ) : (
                <div className="mb-6 h-6 flex items-center">
                    <Skeleton className="bg-gray-200 w-52 h-3 rounded-full"/>
                </div>
            )}

            {productsLoading ? (
                <ProductGrid>
                    {Array( itemsPerPage ).fill( 0 ).map( (_, index) => (
                        <ProductSkeleton key={index}/>
                    ) )}
                </ProductGrid>
            ) : (
                <>
                    {products && products.length > 0 ? (
                        <ProductGrid>
                            {products.map( (product: Product) => (
                                <ProductCard data={product} key={product.id}/>
                            ) )}
                        </ProductGrid>

                    ) : (
                        <p>Products not found</p>
                    )}
                </>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <PagePagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
};

export default PageClient;
