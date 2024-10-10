import React from 'react';
import {Metadata} from 'next';
import {settings} from '@/config/settings';
import {Container} from '@/components/Container';
import {CategoryCard} from '@/components/category-card';
import {getPageCategory, getProductCategories} from '@/lib/wordpress';
import PageHeader from '@/components/header/page-header';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Slash} from "lucide-react";

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
    const pages: CategoryPageProps[] = await getPageCategory();
    const page = pages[0] || null;
    const pageTitle = `${page?.title?.rendered} - ${settings.siteTitle}` || `Categories - ${settings.siteTitle}`;
    const pageDescription = page?.acf?.description ? page.acf.description : '';

    return {
        title: pageTitle,
        description: pageDescription
    };
};

const Categories: React.FC = async () => {
    const categories = await getProductCategories();
    const pages: CategoryPageProps[] = await getPageCategory();
    const pageData = pages[0] ?? null;
    const pageTitle = pageData?.title?.rendered || '';

    return (
        <div>
            <PageHeader data={pageData}/>
            {pageTitle && (
                <Container className="hidden sm:block py-6 pb-0 md:py-6 md:pb-0 xl:py-6 xl:pb-0">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator><Slash/></BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </Container>
            )}

            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories && categories.map( (category: any) => (
                        <div key={category.slug} className="relative">
                            <CategoryCard data={category}/>
                        </div>
                    ) )}
                </div>
            </Container>
        </div>
    );
};

export default Categories;
