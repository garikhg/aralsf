import { gql } from '@apollo/client';

export const BlogInfoFragment = gql`
    fragment BlogInfoFragment on GeneralSettings {
        title
        description
    }
`
export const GlobalOptionsFragment = gql`
    fragment GlobalOptionsFragment on AcfGlobalSettings {
        acfGlobalOptions {
            acfPageNotContent
            acfGoBackButton {
                goBackButtonLink
                goBackButtonText
            }
        }
    }
`
