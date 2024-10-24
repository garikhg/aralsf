export interface Block {
    blockName: string;
    attrs: Record<string, any>;
    innerBlocks: Block[];
    innerHTML: string;
}

export interface Page {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
        blocks: Block[];
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    parent: number;
    menu_order: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: {
        _acf_changed: boolean;
        footnotes: string;
    };
    class_list: string[];
    acf: {
        description: string;
    };
    _links: {
        self: {
            href: string;
        }[];
        collection: {
            href: string;
        }[];
        about: {
            href: string;
        }[];
        author: {
            embeddable: boolean;
            href: string;
        }[];
        replies: {
            embeddable: boolean;
            href: string;
        }[];
        "version-history": {
            count: number;
            href: string;
        }[];
        "predecessor-version": {
            id: number;
            href: string;
        }[];
        "wp:featuredmedia": {
            embeddable: boolean;
            href: string;
        }[];
        "wp:attachment": {
            href: string;
        }[];
        curies: {
            name: string;
            href: string;
            templated: boolean;
        }[];
    };
    _embedded?: {
        author: {
            id: number;
            name: string;
            url: string;
            description: string;
            link: string;
            slug: string;
            avatar_urls: {
                "24": string;
                "48": string;
                "96": string;
            };
            acf: any[];
            _links: {
                self: {
                    href: string;
                }[];
                collection: {
                    href: string;
                }[];
            };
        }[];
        "wp:featuredmedia": {
            id: number;
            date: string;
            slug: string;
            type: string;
            link: string;
            title: {
                rendered: string;
            };
            author: number;
            featured_media: number;
            acf: Record<string, any>;
            caption: {
                rendered: string;
            };
            alt_text: string;
            media_type: string;
            mime_type: string;
            media_details: {
                width: number;
                height: number;
                file: string;
                filesize: number;
                sizes: {
                    medium: {
                        file: string;
                        width: number;
                        height: number;
                        filesize: number;
                        mime_type: string;
                        source_url: string;
                    };
                    large: {
                        file: string;
                        width: number;
                        height: number;
                        filesize: number;
                        mime_type: string;
                        source_url: string;
                    };
                    thumbnail: {
                        file: string;
                        width: number;
                        height: number;
                        filesize: number;
                        mime_type: string;
                        source_url: string;
                    };
                    medium_large: {
                        file: string;
                        width: number;
                        height: number;
                        filesize: number;
                        mime_type: string;
                        source_url: string;
                    };
                    "1536x1536": {
                        file: string;
                        width: number;
                        height: number;
                        filesize: number;
                        mime_type: string;
                        source_url: string;
                    };
                    full: {
                        file: string;
                        width: number;
                        height: number;
                        mime_type: string;
                        source_url: string;
                    };
                };
                image_meta: {
                    aperture: string;
                    credit: string;
                    camera: string;
                    caption: string;
                    created_timestamp: string;
                    copyright: string;
                    focal_length: string;
                    iso: string;
                    shutter_speed: string;
                    title: string;
                    orientation: string;
                    keywords: string[];
                };
            };
            source_url: string;
            _links: {
                self: {
                    href: string;
                }[];
                collection: {
                    href: string;
                }[];
                about: {
                    href: string;
                }[];
                author: {
                    embeddable: boolean;
                    href: string;
                }[];
                replies: {
                    embeddable: boolean;
                    href: string;
                }[];
            };
        }[];
    };
}

// Product Interface

interface Guid {
    rendered: string;
}

interface Title {
    rendered: string;
}

interface AcfCountry {
    term_id: number;
    name: string;
    slug: string;
    term_group: number;
    term_taxonomy_id: number;
    taxonomy: string;
    description: string;
    parent: number;
    count: number;
    filter: string;
    term_order: string;
}

interface Acf {
    sku: string;
    country: AcfCountry;
    manufacturer: string;
    brand: number;
    bottle_size: string;
    bottles_per_case: string;
    alcohol_volume: string;
    color: string;
    type: string;
    attribute: boolean;
    description: string;
    short_description: string;
}

interface LinkHref {
    href: string;
}

interface LinkSelf extends LinkHref {
}

interface LinkCollection extends LinkHref {
}

interface LinkAbout extends LinkHref {
}

interface LinkAcfTerm extends LinkHref {
    embeddable: boolean;
    taxonomy: string;
}

interface LinkWpFeaturedMedia extends LinkHref {
    embeddable: boolean;
}

interface LinkWpAttachment extends LinkHref {
}

interface LinkWpTerm extends LinkHref {
    taxonomy: string;
    embeddable: boolean;
}

interface LinkCuries {
    name: string;
    href: string;
    templated: boolean;
}

interface Links {
    self: LinkSelf[];
    collection: LinkCollection[];
    about: LinkAbout[];
    acfTerm: LinkAcfTerm[];
    wpFeaturedmedia: LinkWpFeaturedMedia[];
    wpAttachment: LinkWpAttachment[];
    wpTerm: LinkWpTerm[];
    curies: LinkCuries[];
}

interface EmbeddedTerm {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    acf: { brand_logo?: number };
    _links: Links;
}

interface Embedded {
    acfTerm: EmbeddedTerm[];
}

export interface Product {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    featured_media: number;
    parent: number;
    template: string;
    brand: number[];
    product_cat: number[];
    country: number[];
    class_list: string[];
    acf: Acf;
    _links: Links;
    _embedded: Embedded;
}

// Category Interface
interface ThumbnailSizes {
    thumbnail: string;
    'thumbnail-width': number;
    'thumbnail-height': number;
    medium: string;
    'medium-width': number;
    'medium-height': number;
    medium_large: string;
    'medium_large-width': number;
    'medium_large-height': number;
    large: string;
    'large-width': number;
    'large-height': number;
    '1536x1536': string;
    '1536x1536-width': number;
    '1536x1536-height': number;
    '2048x2048': string;
    '2048x2048-width': number;
    '2048x2048-height': number;
}

interface Image {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: ThumbnailSizes;
}

interface Acf {
    thumbnail: Image;
    hero_banner: Image;
}

interface LinkHref {
    href: string;
}

interface Links {
    self: LinkHref[];
    collection: LinkHref[];
    about: LinkHref[];
    wpPostType: LinkHref[];
    curies: {
        name: string;
        href: string;
        templated: boolean;
    }[];
}

export interface Category {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: any[];
    acf: Acf;
    _links: Links;
}
