'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import ProductsFilters from '@/components/products/products-filters';
import ProductCard from '@/components/products/product-card';
import { gql, useQuery } from '@apollo/client';

const products = [
  {
    id: 1,
    title: 'Alazani Valley Red Semi-Sweet Wine',
    sku: 'DSC3948',
    alco: '4.5%',
    vol: '750ml',
    imageSrc: '/images/demo/products/alazani-valley-r-DSC3948.jpg'
  },
  {
    id: 2,
    title: 'Khvantchkara Red Semi-Sweet Wine',
    sku: 'DSC3944',
    alco: '4.5%',
    vol: '750ml',
    imageSrc: '/images/demo/products/khvantchkara-DSC3944.jpg'
  },
  {
    id: 3,
    title: 'Kindzmarauli Red Semi-Sweet Wine',
    sku: 'DSC3944',
    alco: '4.5%',
    vol: '750ml',
    imageSrc: '/images/demo/products/kindzmarauli-DSC3950.jpg'
  }
];


const GET_CATEGORY_BY_SLUG = gql`
    query GetCategoryBySlug($idType: AcfProductCatIdType = SLUG, $id1: ID!) {
        acfProductCat(idType: $idType, id: $id1) {
            id
            name
            slug
            description
            termTaxonomyId
            acfProductCategoriesOptions {
                acfThumbnail {
                    node {
                        sourceUrl
                        altText
                        slug
                    }
                }
                acfHeroBanner {
                    node {
                        altText
                        sourceUrl
                    }
                }
            }
        }
    }
`;

const SingleCategory: React.FC = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState<any>( null );
  const [heroBanner, setHeroBanner] = useState<any>( null );

  const { data, error } = useQuery( GET_CATEGORY_BY_SLUG, {
    variables: { id1: slug },
    skip: !slug
  } );

  useEffect( () => {
    if (data?.acfProductCat) {
      setCategory( data?.acfProductCat );

      if (data?.acfProductCat?.acfProductCategoriesOptions?.acfHeroBanner?.node) {
        setHeroBanner( data?.acfProductCat?.acfProductCategoriesOptions?.acfHeroBanner?.node );
      }
    }

  }, [data] );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <PageHeader
        title={category?.name || 'Category'}
        description={category?.description || ''}
        backgroundImage={heroBanner?.sourceUrl || ''}
      />

      <main className="py-24" role="main">
        <div className="container grid grid-cols-4 gap-x-16">
          <Filters />

          <div className="col-span-3">
            <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
              <div>
                <p>Showing all 12 results</p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {products && products.map( (product) => (
                <ProductCard
                  key={product?.id}
                  {...product}
                />
              ) )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

const Filters = () => {
  return (
    <aside className="">
      <ProductsFilters />
    </aside>
  );
};

export default SingleCategory;
