import useSWR from "swr";
import {Category, Product} from "@/lib/types";
import {apiURL, fetchApi} from "@/lib/api";

// Get Category
export function useCategories(slug?: string) {
    const query = slug ? `?slug=${slug}&acf_format=standard&_embed` : '?acf_format=standard&_embed';
    const {data, error} = useSWR<Category[]>( `/wp-json/wp/v2/product_cat${query}`, fetchApi );

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

// Get Products
export function useProducts(catId?: number, page = 1, itemsPerPage = 12) {
    const baseQuery = 'acf_format=standard&_embed';
    const categoryQuery = catId ? `&product_cat=${catId}` : '';
    const paginationQuery = `&page=${page}&per_page=${itemsPerPage}`;
    const query = `?${baseQuery}${categoryQuery}${paginationQuery}`;

    const {data, error} = useSWR<{
        products: Product[],
        totalItems: number,
        totalPages: number
    }>( `/wp-json/wp/v2/product${query}`, async (url: string) => {
        try {
            const response = await fetch( `${apiURL}${url}` );
            const products = await response.json();
            const totalItems = parseInt( response.headers.get( 'X-WP-Total' ) || '0', 10 );
            const totalPages = parseInt( response.headers.get( 'X-WP-TotalPages' ) || '0', 10 );

            return {products, totalItems, totalPages}
        } catch (error) {
            console.error( 'Error fetching products:', error );
            throw error;
        }
    } );

    return {
        products: data?.products || [],
        totalItems: data?.totalItems || 0,
        totalPages: data?.totalPages || 0,
        isLoading: !error && !data,
        isError: error,
    }
}
