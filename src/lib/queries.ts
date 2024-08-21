import { gql } from '@apollo/client';

export const GET_CATEGORY_BY_SLUG = gql`
    query GetCategoryBySlug($idType: AcfProductCatIdType = SLUG, $id1: ID!) {
        acfProductCat(idType: $idType, id: $id1) {
            id
            name
            slug
            description
            termTaxonomyId
            acfProductCategoriesOptions {
                acfThumbnail {
                    node {
                        sourceUrl
                        altText
                        slug
                    }
                }
                acfHeroBanner {
                    node {
                        altText
                        sourceUrl
                    }
                }
            }
            products {
                nodes {
                    slug
                    status
                    title
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    acfProductOptions {
                        brand
                        country
                        manufacturer
                        sku
                        color
                        grapeType
                        type
                        alcoholVolume
                    }
                }
            }
        }
    }
`;
