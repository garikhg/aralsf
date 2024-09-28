import React from 'react';
import {Metadata} from "next";
import {getPageCategory, getProductCategories} from "@/lib/wordpress";
import CategoryCard from "@/components/category/category-card";
import Image from "next/image";
import {settings} from "@/config/settings";

interface AcfProps {
    description?: string
}

interface PageProps {
    title: { rendered: string };
    acf?: AcfProps;
}

interface CategoryPageProps extends PageProps {
    id: string;
    date: string;
    slug: string;
    status: "publish" | "draft" | "pending";
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    parent: number;
    menu_order: number;
    acf?: any | undefined;
    _embedded?: any;
}

export const generateMetadata = async (): Promise<Metadata> => {
    const pages: CategoryPageProps[] = await getPageCategory();
    const page = pages[0] || null;
    const pageTitle = `${page?.title?.rendered} - ${settings.siteTitle}` || `Categories - ${settings.siteTitle}`
    const pageDescription = page?.acf?.description ? page.acf.description : '';

    return {
        title: pageTitle,
        description: pageDescription,
    }
}

const Categories: React.FC = async () => {
    const categories = await getProductCategories();
    const pages: CategoryPageProps[] = await getPageCategory();
    const page = pages[0] ?? null;

    // Page Data
    const {title, acf} = page ?? {};
    const pageTitle = title.rendered ?? 'Categories';
    const pageDescription = acf?.description ?? '';
    const featuredMedia = page?._embedded?.['wp:featuredmedia'][0]?.source_url || null;


    return (
        <div className="min-h-screen">
            {pageTitle && (
                <div className="container relative">
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20">
                        <div className="px-6 lg:px-16 text-primary-foreground text-center">
                            <h1 className="text-5xl font-bold">{pageTitle}</h1>
                            <p dangerouslySetInnerHTML={{__html: pageDescription}}/>
                        </div>
                    </div>

                    {featuredMedia && (
                        <div className="relative rounded-lg overflow-hidden">
                            <span className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/60 to-transparent"></span>
                            <Image
                                src={featuredMedia}
                                alt={pageTitle}
                                width={1728}
                                height={460}
                                className="w-full max-w-full h-[460px] block object-cover rounded-lg"
                            />
                        </div>
                    )}
                </div>
            )}
            <div className="container py-6 sm:py-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories && categories.map( (category: any) => (
                        <div key={category.slug} className="relative">
                            <CategoryCard data={category}/>
                        </div>
                    ) )}
                </div>
            </div>

            {/*<BrandPartnersCarousel/>*/}
        </div>
    );
};

export default Categories;
