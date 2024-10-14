import React from 'react';
import {Metadata} from "next";
import PageClient from "@/app/product-category/[slug]/page-client";
import {fetchCategoryBySlugApi} from "@/lib/api";
import {settings} from "@/config/settings";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const category = await fetchCategoryBySlugApi( params.slug );
    const categoryName = category.name ?? '';
    const categoryDescription = category.description ?? '';

    return {
        title: `${categoryName} - ${settings.siteTitle}`,
        description: categoryDescription,
    }
}

interface ProductCategoryParams {
    params: { slug: string };
    searchParams: { [key: string]: string | undefined };
}

export default function ProductCategory({params, searchParams}: ProductCategoryParams) {
    return <PageClient params={params} searchParams={searchParams}/>;
}


