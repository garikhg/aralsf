'use client';

import React from 'react';
import {CategoryCard} from '@/components/categories/category-card';
import PageBreadcrumb from "@/components/page-breadcrumb";
import {useCategories} from "@/hooks/use-products";
import CategoriesLoading from "@/app/categories/categories-loading";
import {Heading1} from "@/components/ui/heading";
import {usePage} from "@/hooks/use-pages";

const CategoriesClient: React.FC = () => {

    const {data, isLoading, isError} = useCategories();
    const {page, isLoading: isPageLoading, isError: isPageError} = usePage( 'categories' );

    // Error and Loading
    if (isError || isPageError) return <div className="container mx-auto px-4 py-8">Error loading page</div>;

    if (isLoading && isPageLoading) return (
        <CategoriesLoading/>
    );

    // Page
    const title = page?.title?.rendered || 'Categories';
    const description = page?.acf?.description || '';
    let featuredMedia = page?._embedded?.['wp:featuredmedia'] ? page?._embedded?.['wp:featuredmedia']?.[0] : null;
    const featuredMediaSRC = featuredMedia ? featuredMedia?.source_url : '';

    // Categories
    let categories = data || [];
    categories = categories?.filter( (cat: any) => cat.slug !== 'uncategory' && cat.slug !== 'all-products' );

    console.log( page )
    console.log( featuredMediaSRC )

    return (
        <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
            {featuredMediaSRC ? (
                <div className="relative bg-gray-100 h-[360px] lg:h-[480px] rounded-lg overflow-hidden mb-6">
                <span
                    className="block w-full h-full bg-no-repeat bg-center bg-cover"
                    style={{backgroundImage: `url('${featuredMediaSRC}')`}}
                />
                    <div
                        className="w-full h-full absolute flex items-center top-0 left-0 bg-gradient-to-t bg-black/40 to-transparent text-primary-foreground z-20">
                        <div className="w-full max-w-screen-md text-center mx-auto p-8">
                            <Heading1 className="font-medium mb-2">
                                <span dangerouslySetInnerHTML={{__html: title}}/>
                            </Heading1>

                            {description ? (
                                <div className="text-base py-3" dangerouslySetInnerHTML={{__html: description}}/>
                            ) : ('')}
                        </div>
                    </div>
                </div>
            ) : ('')}
            <PageBreadcrumb loading={false}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories && categories.map( (category: any) => (
                    <div key={category.slug} className="relative">
                        <CategoryCard data={category}/>
                    </div>
                ) )}
            </div>
        </div>
    );
};

export default CategoriesClient;
