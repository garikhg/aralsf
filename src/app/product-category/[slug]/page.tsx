/**
 * Link: https://chatgpt.com/c/66dd5438-6f20-8004-bb0d-b7e0b07be3b4
 */
'use client';

import React, {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import {PageHeader} from '@/components/layouts/page-header';
import {useQuery} from '@apollo/client';
import {Button} from '@/components/ui/button';
import {LoaderCircle} from 'lucide-react';
import {z} from 'zod';

import ProductSkeleton from '@/components/Products/product-skeleton';
import ProductCard from '@/components/Products/product-card';
import {getCategoryBySlugQuery} from '@/queries/getCategoryBySlug';
import {Label} from '@/components/ui/label';
import axios from 'axios';
import {Checkbox} from "@/components/ui/checkbox";

const countriesFilter = [
    {name: 'Armenia', value: 'armenia'},
    {name: 'Georgia', value: 'georgia'},
    {name: 'Romania', value: 'romania'},
    {name: 'Ukraine', value: 'ukraine'},
    {name: 'Moldova', value: 'moldova'},
    {name: 'Uzbekistan', value: 'uzbekistan'},
    {name: 'Bulgaria', value: 'bulgaria'},
    {name: 'Poland', value: 'poland'}
];

const colorFilter = [
    {name: 'White', value: 'white'},
    {name: 'Red', value: 'red'},
    {name: 'Blue', value: 'blue'}
];

const FiltersSchema = z.object( {
    filter_country: z.array( z.string() ).optional(),
    filter_color: z.array( z.string() ).optional(),
    filter_type: z.array( z.string() ).optional(),
    filter_size: z.array( z.string() ).optional(),
} );

type Filters = z.infer<typeof FiltersSchema>;

const Products: React.FC = () => {
    const {slug} = useParams<{ slug: string }>();
    const {data, error, fetchMore} = useQuery( getCategoryBySlugQuery, {
        variables: {id1: slug, idType: 'SLUG'},
        skip: !slug
    } );

    const [isLoadingMore, setIsLoadingMore] = useState( false );
    const [filteredProducts, setFilteredProducts] = useState<any>( [] );
    const [selectedFilters, setSelectedFilters] = useState<Filters>( {} );


    useEffect( () => {
        setIsLoadingMore( false );
    }, [slug] );


    const loadFiltersFromUrl = () => {
        const urlParams = new URLSearchParams( window.location.search );
        const filters: { [key: string]: string[] } = {};

        urlParams.forEach( (value, key) => {
            filters[key] = value.includes( '_AND_' ) ? value.split( '_AND_' ) : [value]; // Ensure it's always an array
        } );

        setSelectedFilters( filters );
    }

    const updateUrlWithFilters = (filters: { [key: string]: string[] }) => {
        const queryParams = new URLSearchParams();

        Object.keys( filters ).forEach( (filterKey) => {
            if (filters[filterKey].length > 0) {
                queryParams.append( filterKey, filters[filterKey].join( '_AND_' ) );
            }
        } );

        const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
        window.history.pushState( {}, '', newUrl );
    };

    const fetchFilteredProducts = async (filters: { [key: string]: string[] }) => {
        try {
            // Construct the query string for each filter type
            const queryParams = new URLSearchParams();

            // Dynamically add each filter type and its values to the query string
            Object.keys( filters ).forEach( (filterKey) => {
                if (filters[filterKey].length > 0) {
                    queryParams.append( filterKey, filters[filterKey].join( '_AND_' ) );
                }
            } );

            // Make the Axios GET request with the constructed query string
            const response = await axios.get( `http://aralsf.local/wp-json/wp/v2/product?${queryParams.toString()}` );
            if (response.status === 200) {
                setFilteredProducts( response.data );
            }

        } catch (error) {
            console.error( 'Error fetching products:', error );
        }
    };

    useEffect( () => {
        if (Object.keys( selectedFilters ).length > 0) {
            fetchFilteredProducts( selectedFilters )
                .then( () => updateUrlWithFilters( selectedFilters ) )
                .catch( (error) => console.error( 'Fetch filtered products error:', error ) );
        }
    }, [selectedFilters] );

    useEffect( () => {
        loadFiltersFromUrl();
    }, [] );

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleFilterChange = (value: string, filterType: keyof Filters) => {
        setSelectedFilters( (prevFilters) => {
            const currentValues = prevFilters[filterType] || [];
            return {
                ...prevFilters,
                [filterType]: currentValues.includes( value )
                    ? currentValues.filter( (v) => v !== value )
                    : [...currentValues, value],
            }
        } );
    };

    // Category Details
    let category = data?.acfProductCat || '';
    const heroBanner = category?.acfProductCategoriesOptions?.acfHeroBanner?.node || '';
    const heroBannerSrc = heroBanner ? heroBanner.sourceUrl : '';

    // Products
    const productsData = data?.acfProductCat?.products || '';
    const products = productsData ? productsData.nodes : [];
    const pageInfo = productsData ? productsData.pageInfo : {};

    const loadMoreProducts = async () => {
        if (data?.acfProductCat?.products?.pageInfo?.hasNextPage) {
            setIsLoadingMore( true );

            try {
                await fetchMore( {
                    variables: {
                        productsLast: data?.acfProductCat?.products?.pageInfo?.endCursor
                    },
                    updateQuery: (prev, {fetchMoreResult}) => {
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


    console.log( filteredProducts );

    return (
        <div className="relative min-h-screen flex flex-col">
            <PageHeader
                title={category?.name || ''}
                description={category?.description || ''}
                backgroundImage={heroBannerSrc}
            />

            <main className="py-16 lg:py-24" role="main">
                <div className="container grid grid-cols-1 xl:grid-cols-4 gap-x-16">
                    <aside className="hidden xl:block col-span-1">
                        <div className="block">
                            <h5 className="relative text-md font-semibold tracking-tight">Filter By Color</h5>
                            <div className="space-y-1 py-2">
                                {colorFilter && colorFilter.map( (color) => (
                                    <div key={color.value} className="flex gap-2 py-1">
                                        <Checkbox
                                            id={`filterColor${color.value}`}
                                            checked={selectedFilters.filter_color?.includes( color.name ) || false}
                                            onCheckedChange={() => handleFilterChange( color.name, 'filter_color' )}
                                        />
                                        <Label htmlFor={`filterColor${color.value}`} className="block">
                                            {color.name}
                                        </Label>
                                    </div>
                                ) )}
                            </div>
                        </div>
                    </aside>

                    <div className="col-span-3">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">

                            {products ? products.map( (product: any) => (
                                <div key={product.slug} className="relative">
                                    <ProductCard data={product}/>
                                </div>
                            ) ) : [...Array( 6 )].map( (_, index) => (
                                <div key={index}>
                                    <ProductSkeleton/>
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
                                    {isLoadingMore &&
                                        <LoaderCircle className="animate-spin w-4 h-4"/>}
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
        <Products/>
    );
};


export default ProductCategory;
