// WordPress API functions

import queryString from 'query-string';

import { Brand, Country, NavMenu, PageCategories, Product, ProductCategory } from '@/lib/wordpress.d';

const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

const getUrl = (path: string, query?: Record<string, any>) => {
    const params = query ? queryString.stringify(query) : null;
    const separator = path.includes('?') ? '&' : '?';
    return `${baseUrl}${path}${params ? `${separator}${params}` : ''}`;
};

// WordPress Functions
export const getPageBySlug = async (pageSlug: string) => {
  const url = getUrl( `/wp-json/wp/v2/pages/?slug=${pageSlug}&_embed&acf_format=standard` );
  const response = await fetch( url );

  if (!response.ok) {
    throw new Error( `Failed to fetch page by slug: ${response.statusText}` );
  }

  return await response.json();
};

/**
 * Get All Products
 */
export const getAllProducts = async (): Promise<Product[]> => {
  const url = getUrl( '/wp-json/wp/v2/product' );
  const response = await fetch( url );

  if (!response.ok) {
    throw new Error( `Failed to fetch products: ${response.statusText}` );
  }

  return await response.json();
};

// getAllProductCategories function (ensure it returns an array)
export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const fetchInput = getUrl( '/wp-json/wp/v2/product_cat?acf_format=standard' );
  const response = await fetch( fetchInput );
  if (!response.ok) {
    throw new Error( `Failed to fetch product categories: ${response.statusText}` );
  }

  const data = await response.json();
  // Ensure it's an array before returning
  return Array.isArray( data ) ? data.filter( category => category.slug !== 'uncategory' ) : [];
};

export const getPageCategory = async (): Promise<PageCategories[]> => {
  const url = getUrl( `/wp-json/wp/v2/pages?_embed&slug=categories` );
  const response = await fetch( url );
  if (!response.ok) {
    throw new Error( `Failed to fetch categories page: ${response.statusText}` );
  }

  return await response.json();
};

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
  const url = getUrl( `/wp-json/wp/v2/product_cat?slug=${slug}&acf_format=standard&_embed` );
  const [response] = await Promise.all( [fetch( url )] );

  if (!response.ok) {
    throw new Error( `Failed to fetch products category by slug: ${response.statusText}` );
  }

  return await response.json();
};


/**
 * Returns an array of products based on the provided category ID.
 *
 * @param filterParams
 * @returns {Promise<Product[]>} - A promise that resolves to an array of products.
 * @throws {Error} - If there was an error fetching the products.
 *
 * Query: http://aralsf.local/wp-json/wp/v2/product?product_cat=4&acf_format=standard&_embed
 */
export const getProductsByCategoryId = async (filterParams?: {
  filter_country?: string,
  filter_color?: string,
  filter_bottle_size?: string,
  category: any
}): Promise<Product[]> => {

  const queries = {
    filter_country: filterParams?.filter_country,
    filter_color: filterParams?.filter_color,
    filter_bottle_size: filterParams?.filter_bottle_size,
    product_cat: filterParams?.category
  };

  const url = getUrl( `/wp-json/wp/v2/product?acf_format=standard&_embed`, queries );
  const response = await fetch( url );
  if (!response.ok) {
    throw new Error( `Failed to fetch products page: ${response.statusText}` );
  }

  return await response.json();
};

/**
 * Retrieves all the countries from the WordPress API.
 *
 * @async
 * @returns {Promise<Country[]>} - A promise that resolves to an array of Country objects.
 * @throws {Error} - If the request to the API fails.
 */
export const getAllCountries = async (): Promise<Country[]> => {
  const url = getUrl( '/wp-json/wp/v2/country' );
  const response = await fetch( url );

  if (!response.ok) {
    throw new Error( `Failed to fetch countries: ${response.statusText}` );
  }

  return await response.json();
};

export const getNavMenu = async (location: string): Promise<NavMenu> => {
  const url = getUrl( `/wp-json/menus/v1/menus/${location}` );
  const response = await fetch( url );

  if (!response.ok) {
    throw new Error( `Failed to fetch countries: ${response.statusText}` );
  }

  return await response.json();
};

/**
 * Get All Brands
 *
 * http://aralsf.local/wp-json/wp/v2/brand?acf_format=standard
 */
export const getAllBrands = async ():Promise<Brand[]> => {
  const url = getUrl( '/wp-json/wp/v2/brand?acf_format=standard' );
  const response = await fetch( url );

  if (!response.ok) {
    throw new Error( `Failed to fetch brands: ${response.statusText}` );
  }

  return await response.json();
};
