import { gql } from '@apollo/client';
import { GlobalOptionsFragment } from '@/fragments/GlobalSettings';
import { productDetailsFragment } from '@/components/Products/product-card';

export const getCategoryBySlugQuery = gql`
    ${productDetailsFragment}
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
