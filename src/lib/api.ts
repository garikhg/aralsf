// API URL
const apiURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

// Fetcher function for SWR
export async function fetchApi(endpoint: string): Promise<any> {
    const res = await fetch( `${apiURL}${endpoint}` );
    const json = await res.json()

    if (json.error) {
        console.error( json.error );
        throw new Error( 'Failed to fetch' );
    }

    return json;
}

// Fetcher function for Page
export async function fetchPageApi(slug: string): Promise<any> {
    const pages = await fetch( `${apiURL}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard` );
    const jsonData = await pages.json();
    const page = jsonData.length > 0 ? jsonData[0] : null;

    if (jsonData.error) {
        console.error( jsonData.error );
        throw new Error( 'Failed to page fetch' );
    }

    return page;
}
