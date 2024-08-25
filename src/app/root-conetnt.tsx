import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Footer } from '@/_components';
import { Header, NavigationMenu, SEOHead } from '@/components';
import { BlogInfoFragment } from '@/fragments/GlobalSettings';
import { settings } from '@/config/settings';

export default function RootContent({ children }: Readonly<{ children: React.ReactNode }>) {
  const [primaryMenu, setPrimaryMenu] = useState<any[]>( [] );
  const { data, loading, error } = useQuery( GET_GLOBAL_DATA );

  useEffect( () => {
    if (data?.headerMenuItems) {
      setPrimaryMenu( data?.headerMenuItems?.nodes );
    }
  }, [data] );


  return (
    <div>
      <SEOHead
        title={data?.title || settings.siteTitle}
        description={data?.description || settings.siteDescription}
      />
      <Header menuItems={primaryMenu} />
      {children}
      <Footer />
    </div>
  );
}

const GET_GLOBAL_DATA = gql`
    ${BlogInfoFragment}
    ${NavigationMenu.fragments.entry}
    query GeneralSettingsQuery {
        generalSettings {
            ...BlogInfoFragment
        }
        headerMenuItems: menuItems(where: {location: MENU_1, parentId: "0"}) {
            nodes {
                ...NavigationMenuItemFragment
            }
        }
    }
`;
