import React from 'react';
import {Metadata} from 'next';
import {settings} from '@/config/settings';
import {Container} from '@/components/container';
import {CategoryCard} from '@/components/category-card';
import {getPageCategory, getProductCategories} from '@/lib/wordpress';
import PageHeader from '@/components/header/page-header';
import PageBreadcrumb from "@/components/page-breadcrumb";

interface AcfProps {
    description?: string;
}

interface PageProps {
    title: { rendered: string };
    acf?: AcfProps;
}

interface CategoryPageProps extends PageProps {
    id: string;
    date: string;
    slug: string;
    status: 'publish' | 'draft' | 'pending';
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    acf?: any | undefined;
    _embedded?: any;
}

export const generateMetadata = async (): Promise<Metadata> => {
    const categories: CategoryPageProps[] = await getPageCategory();
    const category = categories[0] || null;
    const title = `${category?.title?.rendered} - ${settings.siteTitle}` || `Categories - ${settings.siteTitle}`;
    const description = category?.acf?.description ? category.acf.description : '';

    return {
        title: title,
        description: description
    };
};

const Categories: React.FC = async () => {
    let categories = await getProductCategories();
    categories = categories.filter( (category: any) => category?.slug !== 'all-products' );

    const pages = await getPageCategory();

    const pageData: any = pages[0] ?? null;

    return (
        <div>
            <PageHeader data={pageData}/>

            <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
                <PageBreadcrumb loading={false}/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories && categories.map( (category: any) => (
                        <div key={category.slug} className="relative">
                            <CategoryCard data={category}/>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default Categories;
