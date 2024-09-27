export type Product = {
    id: number;
    date: string;
    date_gtm: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "draft" | "pending";
    type: string;
    title: {
        rendered: string;
    };
    featured_media: number;
    parent: number;
    template: string;
    brand: any[];
    product_cat: number[];
    country: string[];
    acf: any[]
}

export type ProductCategory = {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: any[];
    acf: any[];
}

export type PageCategory = {
    id: string;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: "publish" | "draft" | "pending";
    type: "page";
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    author: number;
    featured_media: number;
    parent: number;
    menu_order: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta?: any[];
    acf?: any[];
    _embedded?: any[];
}
