import React from 'react';
import {Metadata} from 'next';
import {settings} from '@/config/settings';
import CategoriesClient from "@/app/categories/categories-client";
import {fetchPageApi} from "@/lib/api";

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
    return <CategoriesClient/>;
};

export default Categories;
