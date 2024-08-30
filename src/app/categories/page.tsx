'use client';

import React, { useEffect, useState } from 'react';
// import { PageHeader } from '@/_components';
import { CategoryCard } from '@/app/categories/category-card';
import { BrandPartnersCarousel } from '@/components/BrandPartners/BrandPartnersCarousel';
import { gql, useQuery } from '@apollo/client';
import { PageHeader } from '@/components/layouts/page-header';

const Categories = () => {
  const [categories, setCategories] = useState( [] );
  const { data, loading, error } = useQuery( GET_CATEGORIES_QUERY );

  useEffect( () => {
    if (data?.acfProductCats?.nodes) {
      setCategories( data.acfProductCats.nodes );
    }
  }, [data] );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <PageHeader
        title="Categories"
      />

      <main role="main">
        <div className="container py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories && categories.map( (category: any) => (
              <CategoryCard
                key={category.slug}
                data={category}
              />
            ) )}
          </div>
        </div>

        <BrandPartnersCarousel />
      </main>
    </div>
  );
};

const GET_CATEGORIES_QUERY = gql`
    query GetProductCategories($exclude1: [ID] = "12") {
        acfProductCats(where: {exclude: $exclude1, order: ASC, orderby: TERM_ORDER}) {
            nodes {
                name
                uri
                slug
                description
                acfProductCategoriesOptions {
                    acfThumbnail {
                        node {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
        }
    }
`;

export default Categories;
