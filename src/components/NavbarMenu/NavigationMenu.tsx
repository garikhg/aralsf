import React from 'react';
import { gql } from '@apollo/client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MenuItem {
  id: string;
  path: string;
  label: string;
  nodes?: {
    childItems?: {
      nodes?: {
        id: string;
        uri: string;
        label: string;
      }
    }
  };
}

interface NavigationMenuProps {
  menuItems?: any;
  className?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> & {
  fragments: { entry: any }
} = (
  {
    menuItems,
    className
  }
) => {

  const renderChildItems = (items) => {
    if (!items || items?.childItems?.nodes.length === 0) return false;
    const { childItems } = items;

    console.log( childItems );

    return (
      <ul className="absolute top-full bg-white text-primary">
        {childItems.nodes.map( (childItem) => (
          <li key={childItem.id} className="normal-case">
            <Link href={childItem.path}>
              <span>{childItem.label}</span>
            </Link>
          </li>
        ) )}
      </ul>
    );
  };

  return (
    <nav
      role="navigation"
      aria-label="Primary Navigation Menu"
      className={cn( '', className )}
    >
      <ul className="flex gap-10">
        {menuItems && menuItems.map( (menuItem) => (
          <li key={menuItem.id} className="text-white text-sm uppercase flex items-center after:border-r after:h-4 after:ml-10 last:after:hidden">
            <Link href={menuItem.path}>
              <span>{menuItem.label}</span>
            </Link>
            {renderChildItems( menuItem )}
          </li>
        ) )}
      </ul>
    </nav>
  );
};

// Attach the GraphQL fragment to the component
NavigationMenu.fragments = {
  entry: gql`
      fragment NavigationMenuItemFragment on MenuItem {
          id
          path
          label
          parentId
          cssClasses
          childItems {
              nodes {
                  id
                  label
                  path
              }
          }
          menu {
              node {
                  name
              }
          }
      }
  `
};

export default NavigationMenu;
