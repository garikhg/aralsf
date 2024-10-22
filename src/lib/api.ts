// API URL
import {Category, Page} from "@/lib/types";

export const apiURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Fetcher function
export async function fetchApi(endpoint: string): Promise<any> {
    const res = await fetch( `${apiURL}${endpoint}` );
    const data = await res.json();

    if (data.error) {
        console.error( data.error );
        throw new Error( 'Failed to fetch' );
    }

    return data;
}

// Fetch function for Pages
export async function fetchPageApi(slug: string): Promise<Page | null> {
    if (!apiURL) {
        throw new Error( 'API URL is not defined' )
    }

    const res = await fetch( `${apiURL}/wp-json/wp/v2/pages?slug=${slug}&_embed&acf_format=standard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {revalidate: 5}
    } );

    if (!res.ok) {
        throw new Error( `Failed to fetch page data: ${res.status} ${res.statusText}` );
    }

    const data = await res.json();
    // const page = jsonData.length > 0 ? jsonData[0] : null;

    if (Array.isArray( data ) && data.length > 0) {
        return data[0] as Page;
    }

    return null;
}

// Fetcher function for Categories
export async function fetchCategoriesApi(): Promise<Category[]> {
    if (!apiURL) {
        throw new Error( 'API URL is not defined' );
    }

    const res = await fetch( `${apiURL}/wp-json/wp/v2/product_cat?_embed&acf_format=standard`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {revalidate: 5}
    } );

    if (!res.ok) {
        throw new Error( `Failed to fetch categories data: ${res.status} ${res.statusText}` );
    }

    return await res.json();
}

export async function fetchCategoryBySlugApi(slug: string): Promise<any> {
    const categories = await fetch( `${apiURL}/wp-json/wp/v2/product_cat?slug=${slug}&acf_format=standard&_embed` );
    const jsonData = await categories.json();
    const category = jsonData.length > 0 ? jsonData[0] : null;

    if (jsonData.error) {
        console.error( jsonData.error );
        throw new Error( 'Failed to category by slug fetch' );
    }

    return category;
}

