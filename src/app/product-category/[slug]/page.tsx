'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import ProductCard, { productDetailsFragment } from '@/components/products/product-card';
import { gql, useQuery } from '@apollo/client';
import ProductsFilters from '@/components/products/products-filters';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';


const GET_CATEGORY_BY_SLUG = gql`
    ${productDetailsFragment}
    query GetCategoryBySlug(
        $idType: AcfProductCatIdType = SLUG,
        $id1: ID!
        $productsFirst: Int = 6
        $productsLast: String
    ) {
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
            products(first: $productsFirst, after: $productsLast) {
                nodes {
                    ...ProductDetails
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                }
            }
        }
    }
`;

const ProductCategory: React.FC = ({}) => {
  const { slug } = useParams();
  const [category, setCategory] = useState<any>( null );
  const [heroBanner, setHeroBanner] = useState<any>( null );
  const [isLoadingMore, setisLoadingMore] = useState( false );

  const { data, loading, error, fetchMore } = useQuery( GET_CATEGORY_BY_SLUG, {
    variables: { id1: slug, idType: 'SLUG' },
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

  const getProducts = data?.acfProductCat?.products;

  const loadMoreProducts = async () => {
    if (data?.acfProductCat?.products?.pageInfo?.hasNextPage) {
      setisLoadingMore( true );

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
        console.error( 'Error fetching more products:', erorr );
      } finally {
        setisLoadingMore( false );
      }
    }
  };

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

            <div
              className="grid grid-cols-3 gap-4 relative">
              {getProducts?.nodes && getProducts.nodes.map( (product: any, index: number) => (
                <div key={product.slug || index} className="relative">
                  {isLoadingMore && <Skeleton className="w-[318px] h-[477px] absolute top-0 left-0 z-10" />}
                  <ProductCard data={product} />
                </div>
              ) )}
            </div>
            {getProducts?.pageInfo?.hasNextPage && (
              <Button onClick={loadMoreProducts} disabled={isLoadingMore}>
                Load More
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductCategory;
