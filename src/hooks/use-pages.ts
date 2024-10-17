import useSWR from "swr";
import {Page} from "@/lib/types";
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
