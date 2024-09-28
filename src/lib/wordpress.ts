// WordPress API functions

import queryString from "query-string";

import {PageCategories, Product, ProductCategory} from "@/lib/wordpress.d";

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

export const getPageCategory = async (): Promise<PageCategories[]> => {
    const url = getUrl( `/wp-json/wp/v2/pages?_embed&slug=categories` );
    const response = await fetch( url );
    if (!response.ok) {
        throw new Error( `Failed to fetch categories page: ${response.statusText}` );
    }

    return await response.json();
}

/**
 * Retrieves a product category by its slug.
 *
 * @param {string} slug - The slug of the product category.
 * @return {Promise<ProductCategory>} - The promise that resolves to the retrieved product category.
 * @throws {Error} - If there was an error fetching the product category.
 *
 * Query: http://aralsf.local/wp-json/wp/v2/product_cat?slug=wines&acf_format=standard&_embed
 */
export const getProductCategoryBySlug = async (slug: string): Promise<ProductCategory> => {
    const url = getUrl( `/wp-json/wp/v2/product_cat?${slug}&acf_format=standard&_embed` );
    const [response] = await Promise.all( [fetch( url )] );

    if (!response.ok) {
        throw new Error( `Failed to fetch products category by slug: ${response.statusText}` );
    }

    return await response.json();
}


/**
 * Returns an array of products based on the provided category ID.
 *
 * @param {number} categoryId - The category ID for which products need to be fetched.
 * @returns {Promise<Product[]>} - A promise that resolves to an array of products.
 * @throws {Error} - If there was an error fetching the products.
 *
 * Query: http://aralsf.local/wp-json/wp/v2/product?product_cat=4&acf_format=standard&_embed
 */
export const getProductsByCategoryId = async (categoryId: number): Promise<Product[]> => {
    const url = getUrl( `/wp-json/wp/v2/product?product_cat=${categoryId}&acf_format=standard&_embed`, );
    const response = await fetch( url );
    if (!response.ok) {
        throw new Error( `Failed to fetch products page: ${response.statusText}` );
    }

    const data: Product[] = await response.json();
    return data;
}
