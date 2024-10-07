import { Metadata } from 'next';
import { getAllBrands, getPageBySlug } from '@/lib/wordpress';
import React from 'react';
import PageContent from '@/components/blocks/page-content';
import BlockBrandsCarousel from '@/components/blocks/block-brands-carousel';
import PageHeader from '@/components/header/page-header';

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const pageData = await getPageBySlug( params.slug );
  const pageTitle = pageData[0]?.title?.rendered;

  return {
    title: pageTitle
  };
};

export default async function Pages({ params }: { params: { slug: string } }) {
  const getPageData = await getPageBySlug( params.slug );
  const pageData = getPageData ? getPageData?.[0] : {};
  const brands = await getAllBrands();

  return (
    <>
      <PageHeader data={pageData} />
      <PageContent pageData={pageData} />
      <BlockBrandsCarousel blockData={brands} />
    </>
  );
}
