'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PageHeader } from '@/components/layouts/page-header';
import { gql, useQuery } from '@apollo/client';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

import ProductSkeleton from '@/components/products/product-skeleton';
import ProductCard, { productDetailsFragment } from '@/components/products/product-card';

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

const GET_CATEGORY_BY_SLUG = gql`
    ${productDetailsFragment}
    query GetCategoryBySlug(
        $idType: AcfProductCatIdType = SLUG,
        $id1: ID!
        $productsFirst: Int = 6
        $productsLast: String,
    ) {
        acfProductCat( idType: $idType, id: $id1) {
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
            products(
                first: $productsFirst,
                after: $productsLast,
                where: {
                    status: PUBLISH,
                    orderby: {field: MENU_ORDER, order: ASC},
                }
            ) {
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

const COUNTRY_FILTERS = [
  { name: 'Armenia', value: 'armenia' },
  { name: 'Georgia', value: 'georgia' },
  { name: 'Romania', value: 'romania' },
  { name: 'Ukraine', value: 'ukraine' },
  { name: 'Moldova', value: 'moldova' },
  { name: 'Uzbekistan', value: 'uzbekistan' },
  { name: 'Bulgaria', value: 'bulgaria' },
  { name: 'Poland', value: 'poland' }
] as const;

const Products: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, fetchMore } = useQuery( GET_CATEGORY_BY_SLUG, {
    variables: { id1: slug, idType: 'SLUG' },
    skip: !slug
  } );


  const [heroBanner, setHeroBanner] = useState<{ sourceUrl: string; alertText?: string } | null>( null );
  const [isLoadingMore, setIsLoadingMore] = useState( false );

  const [category, setCategory] = useState<CategoryProps | null>( null );
  const [products, setProducts] = useState( [] );
  const [pageInfo, setPageInfo] = useState<any>( {} );

  useEffect( () => {
    if (data) {
      if (data.acfProductCat) {
        setCategory( data.acfProductCat );
      }

      if (data.acfProductCat.products) {
        const products = data.acfProductCat.products.nodes ?? [];
        const pageInfo = data.acfProductCat.products.pageInfo ?? {};
        // const category = data.acfProductCat.acfProductCategoriesOptions.acfHeroBanner.node ?? '';

        setProducts( products );
        setPageInfo( pageInfo );
      }

      if (data.acfProductCat.acfProductCategoriesOptions.acfHeroBanner.node) {
        setHeroBanner( data.acfProductCat.acfProductCategoriesOptions.acfHeroBanner.node );
      }
    }
  }, [data] );

  useEffect( () => {
    setIsLoadingMore( false );
    setCategory( null );
    setHeroBanner( null );
  }, [slug] );

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
            <div>
              <h5>Filter By Country</h5>
            </div>

          </aside>

          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4 relative">
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
