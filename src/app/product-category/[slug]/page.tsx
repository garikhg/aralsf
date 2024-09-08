'use client';

import React, {ChangeEvent, useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import {PageHeader} from '@/components/layouts/page-header';
import {useQuery} from '@apollo/client';
import {Button} from '@/components/ui/button';
import {LoaderCircle} from 'lucide-react';

import ProductSkeleton from '@/components/Products/product-skeleton';
import ProductCard from '@/components/Products/product-card';
import {getCategoryBySlugQuery} from '@/queries/getCategoryBySlug';
import {Label} from '@/components/ui/label';
import axios from 'axios';
import {ProductFilter} from "@/components";

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

const Products: React.FC = () => {
    const {slug} = useParams<{ slug: string }>();
    const {data, error, fetchMore} = useQuery( getCategoryBySlugQuery, {
        variables: {id1: slug, idType: 'SLUG'},
        skip: !slug
    } );

    const [isLoadingMore, setIsLoadingMore] = useState( false );
    const [filteredProducts, setFilteredProducts] = useState<any>( [] );
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>( {} );


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

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>, filterType: string) => {
        const value = event.target.value;
        setSelectedFilters( (prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType]
                ? prevFilters[filterType].includes( value )
                    ? prevFilters[filterType].filter( (v) => v !== value )
                    : [...prevFilters[filterType], value]
                : [value]
        }) );
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
                        <ProductFilter

                        />
                        {/*<div>*/}
                        {/*  <h5>Filter By Country</h5>*/}
                        {/*  {countriesFilter && countriesFilter.map( (country) => (*/}
                        {/*    <div key={country.value} className="flex gap-2">*/}
                        {/*      <input*/}
                        {/*        id={`country-${country.value}`}*/}
                        {/*        type="checkbox"*/}
                        {/*        // checked={filters.country.includes( country )}*/}
                        {/*        value={country.name}*/}
                        {/*        onChange={handleFilterChange}*/}
                        {/*        className=""*/}
                        {/*      />*/}
                        {/*      <Label htmlFor={`country-${country.value}`}*/}
                        {/*             className="block py-2">*/}
                        {/*        {country.name}*/}
                        {/*      </Label>*/}
                        {/*    </div>*/}
                        {/*  ) )}*/}
                        {/*</div>*/}

                        <div>
                            <h5>Filter By Color</h5>
                            {colorFilter && colorFilter.map( (color) => (
                                <label key={color.value} className="block py-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedFilters?.filter_color?.includes( color.name ) || false}
                                        value={color.name}
                                        onChange={(e) => handleFilterChange( e, 'filter_color' )}
                                    />
                                    {color.name}
                                </label>
                            ) )}
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
