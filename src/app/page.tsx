'use client';

import React from 'react';
import {Cover, HeroSlider, PartnersCarousel} from '@/_components';
import {BlockMediaText} from '@/components/blocks/MediaText';
import {gql} from '@apollo/client';

export default function Home() {
    return (
        <main role="main">
            <HeroSlider/>
            <Cover/>
            <BlockMediaText/>
            <PartnersCarousel/>
        </main>
    );
}

const GET_PAGE_DATA = gql`
    query PageDataQuery {
        generalSettings { ...BlogInfoFragment }
        menu(id: "menu-1", idType: LOCATION) {
            menuItems {
                nodes {
                    childItems(where: {location: MENU_1}) {
                        nodes {
                            uri
                            label
                            id
                        }
                    }
                    id
                    uri
                    path
                    label
                }
            }
        }
    }
`;
