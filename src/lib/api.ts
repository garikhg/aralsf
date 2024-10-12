// API URL
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

// Fetcher function for SWR
export async function fetchApi(endpoint: string): Promise<any> {
    const res = await fetch( `${API_URL}${endpoint}` );
    const json = await res.json()

    if (json.error) {
        console.error( json.error );
        throw new Error( 'Failed to fetch' );
    }

    return json;
}
