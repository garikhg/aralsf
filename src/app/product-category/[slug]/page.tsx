'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import ProductCard, { productDetailsFragment } from '@/components/products/product-card';
import { gql, useQuery } from '@apollo/client';
import ProductsFilters from '@/components/products/products-filters';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { LoaderCircle } from 'lucide-react';
import ProductSkeleton from '@/components/products/product-skeleton';

interface Product {
  slug: string;
  status: boolean;
  title: string;
  acfProductCategoriesOptions?: {
    acfThumbnail?: {
      node?: {
        sourceUrl?: string;
        altText?: string;
        slug?: string;
      };
    };
    acfHeroBanner?: {
      node?: {
        altText?: string;
        sourceUrl?: string;
      };
    };
  };
}

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
}

interface ProductsData {
  nodes: Product[];
  pageInfo: PageInfo;
}

interface CategoryProps {
  name: string;
  description?: string;
  products: ProductsData;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  }
};

const ProductCategory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<any | null>( null );
  const [category, setCategory] = useState<CategoryProps | null>( null );
  const [heroBanner, setHeroBanner] = useState<{ sourceUrl: string; alertText?: string } | null>( null );
  const [isLoadingMore, setIsLoadingMore] = useState( false );

  const { data, error, fetchMore } = useQuery( GET_CATEGORY_BY_SLUG, {
    variables: {
      id1: slug,
      idType: 'SLUG'
    },
    skip: !slug
  } );

  useEffect( () => {
    setIsLoadingMore( false );
    setCategory( null );
    setHeroBanner( null );
  }, [slug] );

  useEffect( () => {
    if (data?.acfProductCat) {
      setCategory( data?.acfProductCat );

      if (data?.acfProductCat?.acfProductCategoriesOptions?.acfHeroBanner?.node) {
        setHeroBanner( data.acfProductCat.acfProductCategoriesOptions.acfHeroBanner.node );
      }
    }

    if (data?.acfProductCat?.products) {
      setProducts( data.acfProductCat.products );
    }

  }, [data] );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        console.error( 'Error fetching more products:', erorr );
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
        backgroundImage={heroBanner?.sourceUrl || ''}
      />

      <main className="py-24" role="main">
        <div className="container grid grid-cols-4 gap-x-16">
          <aside className="col-span-1">
            <ProductsFilters />
          </aside>

          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4 relative">
              {products?.nodes ? products.nodes.map( (product: any, index: number) => (
                <div key={product.slug || index} className="relative">
                  <ProductCard data={product} />
                  {isLoadingMore && <Skeleton className="w-[318px] h-[477px] absolute top-0 left-0 z-10" />}
                </div>
              ) ) : [...Array( 6 )].map( (_, index) => (
                <ProductSkeleton key={index} />
              ) )}
            </div>
            {products?.pageInfo?.hasNextPage && (
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
      </main>
    </div>
  );
};

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
export default ProductCategory;
