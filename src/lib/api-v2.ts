import axios from "axios";

const apiV2 = axios.create( {
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
} )


export const fetchPages = async (): Promise<any> => {
    return await apiV2.get( '/wp-json/wp/v2/pages' );
}
