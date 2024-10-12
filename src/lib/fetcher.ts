
// Base API URL
export const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

// Fetcher function for SWR
export const fetcher = async <T>(url: string): Promise<T> => {
    const res = await fetch( url );
    if (!res.ok) {
        throw new Error( 'Failed to fetch' );
    }
    return res.json();
};
