import { gql } from '@apollo/client';

export const GET_CATEGORY_BY_SLUG = gql`
    query GetCategoryBySlug(
        $idType: AcfProductCatIdType = SLUG, 
        $id1: ID!
        $productsFirst: Int = 6
        $productsLast: String
    ) {
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
            products(first: $productsFirst, after: $productsLast) {
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
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                }
            }
        }
    }
`;
