import useSWR from "swr";
import {Category, Page, Product} from "@/lib/types";
import {fetchApi} from "@/lib/api";

export function usePages() {
    const {data, error} = useSWR<Page[]>( '/wp-json/wp/v2/pages?acf_format=standard&_embed', fetchApi );

    return {
        pages: data,
        isLoading: !error && !data,
        isError: error,
    }
}

export function usePage(slug: string) {
    const {
        data,
        error
    } = useSWR<Page[]>( `/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard&_embed`, fetchApi );

    return {
        page: data && data.length > 0 ? data[0] : null,
        isLoading: !error && !data,
        isError: error,
    }
}

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


export function useProducts(catId?: number) {
    const baseQuery = 'acf_format=standard&_embed';
    const categoryQuery = catId ? `&product_cat=${catId}` : '';
    const query = `?${baseQuery}${categoryQuery}`;

    const {data, error} = useSWR<Product>( `/wp-json/wp/v2/product${query}`, fetchApi );

    return {
        products: data,
        isLoading: !error && !data,
        isError: error,
    }
}
