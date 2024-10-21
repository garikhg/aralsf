import React from 'react';
import {Metadata} from 'next';
import {settings} from '@/config/settings';
import CategoriesClient from "@/app/categories/categories-client";
import {apiURL, fetchPageApi} from "@/lib/api";

export const revalidate = 10;

export const generateMetadata = async (): Promise<Metadata> => {
    const page = await fetchPageApi( 'categories' );
    const title = page?.title?.rendered || 'Categories';
    let description = page?.acf?.description || '';
    description = description ? description.replace( /<\/?p>/g, '' ) : '';

    return {
        title: `${title} - ${settings.siteTitle}`,
        description: description
    };
};


const Categories = async () => {
    const page = await fetch( `${apiURL}/wp-json/wp/v2/pages?slug=categories&acf_format=standard`, {
        method: 'GET',
        cache: 'default',
        next: {
            revalidate: 10
        }
    } );
    const pageData = await page.json();
    const title = pageData[0]?.title?.rendered

    return (
        <>
            <div className="hidden">{title}</div>
            <CategoriesClient/>
        </>
    );
};

export default Categories;
