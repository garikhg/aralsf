'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import ProductCard from '@/components/products/product-card';
import { gql, useQuery } from '@apollo/client';
import ProductsFilters from '@/components/products/products-filters';
import { GET_CATEGORY_BY_SLUG } from '@/lib/queries';


const ProductCategory: React.FC = ({}) => {
  const { slug } = useParams();
  const [category, setCategory] = useState<any>( null );
  const [heroBanner, setHeroBanner] = useState<any>( null );

  const { data, loading, error } = useQuery( GET_CATEGORY_BY_SLUG, {
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

  if (loading) {
    return null;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getProducts = data?.acfProductCat?.products?.nodes;

  console.log( getProducts );
  return (
    <div className="min-h-screen">
      <PageHeader
        title={category?.name || 'Category'}
        description={category?.description || ''}
        backgroundImage={heroBanner?.sourceUrl || ''}
      />

      <main className="py-24" role="main">
        <div className="container grid grid-cols-4 gap-x-16">
          <aside className="col-span-1">
            <ProductsFilters />
          </aside>

          <div className="col-span-3">
            <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
              <div>
                <p>Showing all 12 results</p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {getProducts && getProducts.map( (product: any) => (
                <ProductCard
                  key={product?.id}
                  data={product}
                />
              ) )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};
export default ProductCategory;
