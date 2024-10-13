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
            acf: any[];
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

