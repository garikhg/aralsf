import React from 'react';
import {Metadata} from "next";
import {getAllCountries, getProductCategoryBySlug, getProductsByCategoryId} from "@/lib/wordpress";
import {settings} from "@/config/settings";
import {Container} from "@/components/Container";
import {ProductCard} from "@/components/ProductCard";
import ProductsFilters from "@/components/ProductsFilters";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const categories = await getProductCategoryBySlug( params.slug );
    const categoryTitle = categories[0]?.name ? `${categories[0]?.name} - ${settings.siteTitle}` : '';
    const categoryDescription = categories[0]?.description ? categories[0]?.description : '';

    return {title: categoryTitle, description: categoryDescription}
}


interface ProductCategoryParams {
    params: { slug: string };
    searchParams: { [key: string]: string | undefined }
}

const ProductCategory: React.FC<ProductCategoryParams> = async ({params, searchParams}) => {
    const {country, filter_color, filter_bottle_size} = searchParams;
    const categories = await getProductCategoryBySlug( params.slug );
    const products = await getProductsByCategoryId( categories[0]?.id, {filter_color, filter_bottle_size} );

    // Fetching countries
    const getCountries = await getAllCountries();

    // Extracting the unique color values from the products
    const colors = Array.from(
        new Set( products.map( (product: any) => product.acf.color ) )
    );

    // Extracting the unique bottle_size values from the products
    const bottleSizes = Array.from(
        new Set( products.map( (product: any) => product.acf.bottle_size ) )
    );

    // Extracting the unique bottles_per_case values from the products
    const bottlesCases = Array.from(
        new Set( products.map( (product: any) => product.acf.bottles_per_case ) )
    );

    return (
        <Container>
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 md:col-span-3">
                    <ProductsFilters
                        countries={getCountries}
                        colors={colors}
                        bottleSizes={bottleSizes}
                        bottlesCases={bottlesCases}
                    />
                </div>

                <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-3 gap-4">
                        {products && products.map( (product: any) => (
                            <ProductCard
                                key={product.id}
                                data={product}
                            />
                        ) )}
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default ProductCategory;
