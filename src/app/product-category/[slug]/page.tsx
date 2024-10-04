'use client';

import React, {useEffect, useState} from 'react';
// import {Metadata} from "next";
import {getAllCountries, getProductCategoryBySlug, getProductsByCategoryId} from "@/lib/wordpress";
// import {settings} from "@/config/settings";
import {Container} from "@/components/Container";
import {ProductCard} from "@/components/ProductCard";
import ProductsFilters from "@/components/ProductsFilters";
import ProductsFiltersTags from "@/components/ProductsFiltersTags";
import {usePathname, useRouter} from "next/navigation";

// export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
//     const categories = await getProductCategoryBySlug( params.slug );
//     const categoryTitle = categories[0]?.name ? `${categories[0]?.name} - ${settings.siteTitle}` : '';
//     const categoryDescription = categories[0]?.description ? categories[0]?.description : '';
//
//     return {title: categoryTitle, description: categoryDescription}
// }

interface ProductCategoryParams {
    params: { slug: string };
    searchParams: { [key: string]: string | undefined }
}

interface ActiveFiltersParams {
    filter_color: string[];
    filter_bottle_size: string[];
}

const ProductCategory: React.FC<ProductCategoryParams> = ({params, searchParams}) => {
    const {country, filter_color, filter_bottle_size} = searchParams;

    const router = useRouter();
    const pathname = usePathname();

    // Set from fetched data
    const [categories, setCategories] = useState<any[]>( [] );
    const [products, setProducts] = useState<any[]>( [] );
    const [countries, setCountries] = useState<any[]>( [] );

    // Loading state for fetchData and filters
    const [loading, setLoading] = useState<boolean>( false );

    // State for active filters
    const [activeFilters, setActiveFilters] = useState( {
        filter_color: filter_color ? filter_color.split( '_' ) : [],
        filter_bottle_size: filter_bottle_size ? filter_bottle_size.split( '_' ) : [],
    } );

    // Fetch products and filters based on the active filters
    const fetchData = async () => {
        setLoading( true );

        try {
            const categoriesData = await getProductCategoryBySlug( params.slug );
            setCategories( categoriesData );

            if (categoriesData.length > 0) {
                const category = categoriesData[0]?.id || 0;
                const productsData = await getProductsByCategoryId( {filter_color, filter_bottle_size, category} );
                setProducts( productsData );
            }

            const countriesData = await getAllCountries();
            setCountries( countriesData );

        } catch (error) {
            console.error( 'Error fetching data:', error );
        } finally {
            const loadingTimer = setTimeout( () => {
                setLoading( false );
            }, 1000 )

            return () => clearTimeout( loadingTimer );
        }
    }

    useEffect( () => {
        document.title = `Wine's`;
    }, [] );

    useEffect( () => {
        fetchData().then();
    }, [params.slug, filter_color, filter_bottle_size] );


    // Extracting unique values for filters
    const colors = Array.from( new Set( products.map( (product: any) => product.acf.color ) ) );
    const bottleSizes = Array.from( new Set( products.map( (product: any) => product.acf.bottle_size ) ) );
    const bottlesCases = Array.from( new Set( products.map( (product: any) => product.acf.bottles_per_case ) ) );


    const updateSearchParams = (filterType: keyof ActiveFiltersParams, updatedFilters: string[]) => {
        const params = new URLSearchParams( window.location.search );

        if (updatedFilters.length > 0) {
            params.set( filterType, updatedFilters.join( '_' ) );
        } else {
            params.delete( filterType );
        }

        router.replace( `${pathname}?${params.toString()}`, {scroll: false} );
    }

    // Handler to update active filters dynamically
    const handlerUpdateFilters = (filterType: keyof ActiveFiltersParams, filterValue: string) => {
        setActiveFilters( (prev) => {
            const currentFilters = prev[filterType];
            const updatedFilters = currentFilters.includes( filterValue )
                ? currentFilters.filter( (v: string) => v !== filterValue )
                : [...currentFilters, filterValue]
            updateSearchParams( filterType, updatedFilters );
            return {...prev, [filterType]: updatedFilters}
        } );
    }

    // Handler to remove filters
    const handlerRemoveFilter = (filterType: keyof ActiveFiltersParams, filterValue: string) => {
        setActiveFilters( (prev) => {
            const updatedFilters = prev[filterType].filter( (v: string) => v !== filterValue );
            updateSearchParams( filterType, updatedFilters );
            return {...prev, [filterType]: updatedFilters};
        } );
    }

    return (
        <Container>

            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 md:col-span-3">
                    <ProductsFilters
                        countries={countries}
                        colors={colors}
                        bottleSizes={bottleSizes}
                        bottlesCases={bottlesCases}
                        onUpdateFilters={handlerUpdateFilters}
                    />
                </div>

                <div className="col-span-12 md:col-span-9">
                    <div className="min-h-9 space-y-2 mb-4">
                        <div>
                            <span className="text-gray-600">Showing 1–12 of 29 item(s)</span>
                        </div>
                        <div className="h-9">
                            <ProductsFiltersTags
                                activeFilters={activeFilters}
                                onRemoveFilter={handlerRemoveFilter}
                            />
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center">
                            <p>Loading products...</p> {/* Replace this with a spinner if needed */}
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            {products && products.map( (product: any) => (
                                <ProductCard
                                    key={product.id}
                                    data={product}
                                />
                            ) )}
                        </div>
                    )}
                </div>

            </div>
        </Container>
    );
};

export default ProductCategory;
