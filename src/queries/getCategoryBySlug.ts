import { gql } from '@apollo/client';

const productDetailsFragment = gql`
    fragment ProductDetails on Product {
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
            acfProductAttribute {
                acfProductAttributeName
                acfProductAttributeValue
            }
        }
    }
`;

export const getCategoryBySlugQuery = gql`
    ${productDetailsFragment}
    query GetCategoryBySlug(
        $idType: AcfProductCatIdType = SLUG,
        $id1: ID!
        $productsFirst: Int = 6
        $productsLast: String,
    ) {
        acfProductCat( idType: $idType, id: $id1) {
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
            products(
                first: $productsFirst,
                after: $productsLast,
                where: {
                    status: PUBLISH,
                    orderby: {field: MENU_ORDER, order: ASC},
                }
            ) {
                nodes {
                    ...ProductDetails
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
