'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/layouts/page-header';
import { gql, useQuery } from '@apollo/client';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

import ProductSkeleton from '@/components/Products/product-skeleton';
import ProductCard from '@/components/Products/product-card';
import { Label } from '@/components/ui/label';
import { getCategoryBySlugQuery } from '@/queries/getCategoryBySlug';
import ProductsNoContent from '@/components/Products/products-no-content';

const countriesFilter = [
  { name: 'Armenia', value: 'armenia' },
  { name: 'Georgia', value: 'georgia' },
  { name: 'Romania', value: 'romania' },
  { name: 'Ukraine', value: 'ukraine' },
  { name: 'Moldova', value: 'moldova' },
  { name: 'Uzbekistan', value: 'uzbekistan' },
  { name: 'Bulgaria', value: 'bulgaria' },
  { name: 'Poland', value: 'poland' }
];

const colorFilter = [
  { name: 'White', value: 'white' },
  { name: 'Red', value: 'red' }
];

interface FiltersProps {
  country: string[];
  bottleSize: number[];
  bottleType: string[];
  color: string[];
}


const Products: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, fetchMore } = useQuery( getCategoryBySlugQuery, {
    variables: { id1: slug, idType: 'SLUG' },
    skip: !slug
  } );


  const [isLoadingMore, setIsLoadingMore] = useState( false );

  const [filteredProducts, setFilteredProducts] = useState<any>( [] );
  const [selectedColors, setSelectedColors] = useState<any>( [] );

  const [filters, setFilters] = useState<any>( {
    country: [],
    bottleSize: [],
    bottleType: [],
    color: []
  } );

  useEffect( () => {
    setIsLoadingMore( false );
  }, [slug] );


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log( data );

  // Category Details
  let category = data?.acfProductCat || '';
  const heroBanner = category?.acfProductCategoriesOptions?.acfHeroBanner?.node || '';
  const heroBannerSrc = heroBanner ? heroBanner.sourceUrl : '';

  // Products
  const productsData = data?.acfProductCat?.products || '';
  const products = productsData ? productsData.nodes : [];
  const pageInfo = productsData ? productsData.pageInfo : {};


  const handleFilterChange = (filterKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFilters( (prevProducts: any) => {
      const safePrevProducts = Array.isArray( prevProducts ) ? prevProducts : [];
      const updatedFilters = checked
        ? [...safePrevProducts, value]
        : safePrevProducts.filter( (country: string) => country !== value );
      appliedFilters( products, updatedFilters );
      console.log( updatedFilters );
      return updatedFilters;
    } );
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedColors( (prevColors: any) => {
      const updatedColors = checked
        ? [...prevColors, value]
        : prevColors.filter( (color: string) => color !== value );
      appliedFilters( products, updatedColors );
      return updatedColors;
    } );
  };

  // Function to filter Products based on selected colors
  function appliedFilters(products: any[], selectedColors: string[]): void {
    const filtered = products.filter( product => {
      const attributes = product.acfProductOptions.acfProductAttribute || [];
      return Array.isArray( attributes ) && attributes.some( attr => {
        // return selectedColors.includes(attr.acfProductAttributeValue.trim().toLowerCase());
        return selectedColors.includes( attr.acfProductAttributeValue );
      } );
    } );

    setFilteredProducts( filtered );
    // setProducts( filtered );
  }

  // console.log( selectedColors );
  // console.log( filteredProducts );
  // console.log( filters );

  const loadMoreProducts = async () => {
    if (data?.acfProductCat?.products?.pageInfo?.hasNextPage) {
      setIsLoadingMore( true );

      try {
        await fetchMore( {
          variables: {
            productsLast: data?.acfProductCat?.products?.pageInfo?.endCursor
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return {
              acfProductCat: {
                ...prev.acfProductCat,
                products: {
                  ...prev.acfProductCat.products,
                  nodes: [
                    ...prev.acfProductCat.products.nodes,
                    ...fetchMoreResult.acfProductCat.products.nodes
                  ],
                  pageInfo: fetchMoreResult.acfProductCat.products.pageInfo
                }
              }
            };
          }
        } );

      } catch (erorr) {
        console.error( 'Error fetching more Products:', erorr );
      } finally {
        setIsLoadingMore( false );
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <PageHeader
        title={category?.name || ''}
        description={category?.description || ''}
        backgroundImage={heroBannerSrc}
      />

      <main className="py-16 lg:py-24" role="main">
        {products.length > 0 ? (
          <div className="container grid grid-cols-1 xl:grid-cols-4 gap-x-16">
            <aside className="hidden xl:block col-span-1">
              <div>
                <h5>Filter By Country</h5>
                {countriesFilter && countriesFilter.map( (country) => (
                  <div key={country.value} className="flex gap-2">
                    <input
                      id={`country-${country.value}`}
                      type="checkbox"
                      // checked={filters.country.includes( country )}
                      value={country.name}
                      onChange={(e) => handleFilterChange( 'country', e )}
                      className=""
                    />
                    <Label htmlFor={`country-${country.value}`} className="block py-2">
                      {country.name}
                    </Label>
                  </div>
                ) )}
              </div>

              <div>
                <h5>Filter By Color</h5>
                {colorFilter && colorFilter.map( (color) => (
                  <label key={color.value} className="block py-2">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes( color.name )}
                      value={color.name}
                      onChange={handleColorChange}
                    />
                    {color.name}
                  </label>
                ) )}
              </div>
            </aside>

            <div className="col-span-3">

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
                {filteredProducts && filteredProducts.map( (product: any) => (
                  <div key={product?.slug}>
                    {product?.title}
                  </div>
                ) )}

                {products ? products.map( (product: any) => (
                  <div key={product.slug} className="relative">
                    <ProductCard data={product} />
                  </div>
                ) ) : [...Array( 6 )].map( (_, index) => (
                  <div key={index}>
                    <ProductSkeleton />
                  </div>
                ) )}
              </div>

              {pageInfo.hasNextPage && (
                <div className="flex justify-center items-center mt-6">
                  <Button
                    onClick={loadMoreProducts}
                    disabled={isLoadingMore}
                    variant="ghost"
                    className="flex gap-2 tsxt-xs uppercase"
                  >
                    {isLoadingMore && <LoaderCircle className="animate-spin w-4 h-4" />}
                    <span>Load More...</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <ProductsNoContent data={data} />
        )}
      </main>
    </div>
  );
};

const ProductCategory: React.FC = () => {

  return (
    <Products />
  );
};


export default ProductCategory;
