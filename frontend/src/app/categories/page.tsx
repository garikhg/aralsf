'use client';

import React, { useEffect, useState } from 'react';
import { PageHeader } from '@/_components';
import { CategoryCard } from '@/app/categories/category-card';
import { BrandPartnersCarousel } from '@/components/BrandPartners/BrandPartnersCarousel';
import { gql, useQuery } from '@apollo/client';


const GET_CATEGORIES_QUERY = gql`
    query GetProductCategories($exclude1: [ID] = "12") {
        acfProductCats(where: {exclude: $exclude1}) {
            nodes {
                id
                uri
                name
                slug
                description
                termTaxonomyId
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

const Categories: React.FC = () => {
  const [categories, setCategories] = useState( [] );
  const { data, error } = useQuery( GET_CATEGORIES_QUERY );

  useEffect( () => {
    if (data?.acfProductCats?.nodes) {
      setCategories( data?.acfProductCats?.nodes );
    }
  }, [data] );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <PageHeader
        title="Categories"
        description=""
      />
      <main role="main">
        <div className="container py-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories && categories.map( (category: any) => (
              <CategoryCard
                key={category.id}
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

export default Categories;
