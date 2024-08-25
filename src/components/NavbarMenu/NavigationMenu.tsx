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

  const renderChildItems = (items: any) => {
    if (!items || items?.childItems?.nodes.length === 0) return false;
    const { childItems } = items;

    return (
      <ul
        className={cn(
          'min-w-48 absolute top-full left-2/4 bg-slate-50 rounded-md shadow-lg text-primary -translate-x-2/4',
          'py-2 pt-1 before:block before:w-[6px] before:border-[6px] before:border-slate-50 before:rotate-[135deg]',
          'before:border-t-transparent before:border-r-transparent before:absolute before:-top-1 before:left-2/4 before:-translate-x-2/4',
          'hidden group-hover:block opacity-0 group-hover:opacity-100 h-0 group-hover:h-[auto]',
          'transition-all duration-150'
        )}>
        {childItems.nodes.map( (childItem: any) => (
          <li key={childItem.id} className="normal-case">
            <Link href={childItem.path} className="block px-4 py-2 transition-all duration-200 hover:bg-slate-200">
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
      <ul className="flex">
        {menuItems && menuItems.map( (menuItem: any) => (
          <li key={menuItem.id}
              className="group relative text-white text-sm uppercase flex items-center after:border-r after:h-4 last:after:hidden"
          >
            <Link href={menuItem.path} className="px-10 py-[1.875rem]">
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
