// WordPress API functions

import queryString from "query-string";

import {PageCategory, Product, ProductCategory} from "@/lib/wordpress.d";

const baseUrl = process.env.WORDPRESS_URL || 'http://aralsf.local';

const getUrl = (path: string, query?: Record<string, any>) => {
    const params = query ? queryString.stringify( query ) : null;
    return `${baseUrl}${path}${params ? `?${params}` : ''}`;
}

// WordPress Functions
export const getAllProducts = async (filterParams?: {}): Promise<Product[]> => {
    const url = getUrl( '/wp-json/wp/v2/product', {} );
    const response = await fetch( url );

    if (!response.ok) {
        throw new Error( `Failed to fetch products: ${response.statusText}` );
    }

    const products: Product[] = await response.json();
    return products;
}

// getAllProductCategories function (ensure it returns an array)
export const getProductCategories = async (): Promise<ProductCategory[]> => {
    const fetchInput = getUrl( '/wp-json/wp/v2/product_cat?acf_format=standard' );
    const response = await fetch( fetchInput );
    if (!response.ok) {
        throw new Error( `Failed to fetch product categories: ${response.statusText}` );
    }

    const data = await response.json();
    // Ensure it's an array before returning
    return Array.isArray( data )
        ? data.filter( category => category.slug !== 'uncategory' )
        : [];
};

export const getPageCategory = async (): Promise<PageCategory[]> => {
    const url = getUrl( `/wp-json/wp/v2/pages?_embed&slug=categories` );
    const response = await fetch( url );
    if (!response.ok) {
        throw new Error( `Failed to fetch categories page: ${response.statusText}` );
    }

    return await response.json();
}

export const getProductsByCategory = async (categoryId: number): Promise<Product[]> => {
    const url = getUrl( '/wp-json/wp/v2/product', {product_cat: categoryId} );
    const response = await fetch( url );
    if (!response.ok) {
        throw new Error( `Failed to fetch products page: ${response.statusText}` );
    }

    const data: Product[] = await response.json();
    return data;
}
