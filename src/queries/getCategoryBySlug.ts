import { gql } from '@apollo/client';
import { ProductDetails } from '@/fragments/ProductDetails';
import { GlobalOptionsFragment } from '@/fragments/GlobalSettings';

export const getCategoryBySlugQuery = gql`
    ${ProductDetails}
    ${GlobalOptionsFragment}
    query GetCategoryBySlug(
        $idType: AcfProductCatIdType = SLUG,
        $id1: ID!
        $productsFirst: Int = 6
        $productsLast: String,
    ) {
        acfGlobalSettings {...GlobalOptionsFragment}
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
