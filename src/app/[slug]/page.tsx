import {Metadata} from 'next';
import {getAllBrands, getPageBySlug} from '@/lib/wordpress';
import React from 'react';
import BlockPageContent from '@/components/blocks/block-page-content';
import BlockBrandsCarousel from '@/components/blocks/block-brands-carousel';
import PageHeader from '@/components/header/page-header';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Slash} from "lucide-react";
import {Container} from "@/components/container";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const pageData = await getPageBySlug( params.slug );
    const pageTitle = pageData[0]?.title?.rendered;

    return {
        title: pageTitle
    };
};

export default async function Pages({params}: { params: { slug: string } }) {
    const getPageData = await getPageBySlug( params.slug );
    const pageData = getPageData ? getPageData?.[0] : {};
    const brands = await getAllBrands();
    const pageTitle = pageData?.title?.rendered || '';

    return (
        <>
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

            <BlockPageContent pageData={pageData}/>
            <BlockBrandsCarousel blockData={brands}/>
        </>
    );
}
