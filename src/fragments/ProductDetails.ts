import { gql } from '@apollo/client';

export const ProductDetails = gql`
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
