import React from 'react';
import {Metadata} from 'next';
import {settings} from '@/config/settings';
import {fetchCategoriesApi, fetchPageApi} from "@/lib/api";
import CategoriesHeader from "@/app/categories/categories-header";
import PageBreadcrumb from "@/components/page-breadcrumb";
import CategoriesList from "@/app/categories/categories-list";

export const generateMetadata = async (): Promise<Metadata> => {
    const page = await fetchPageApi( 'categories' );
    const title = page?.title?.rendered || 'Categories';
    let description = page?.acf?.description || '';
    description = description ? description.replace( /<\/?p>/g, '' ) : '';

    return {
        title: `${title} - ${settings.siteTitle}`,
        description: description,
    };
};


const Categories = async () => {
    const page = await fetchPageApi( 'categories' );
    const fetchCategories = await fetchCategoriesApi();
    const categories = fetchCategories.filter( (cat: any) => cat?.slug !== 'uncategory' && cat?.slug !== 'all-products' );

    return (
        <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
            <CategoriesHeader data={page}/>
            <PageBreadcrumb loading={false}/>
            <CategoriesList data={categories}/>
        </div>
    );
};

export default Categories;
