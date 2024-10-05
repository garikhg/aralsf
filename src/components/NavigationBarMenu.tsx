'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {ChevronDown} from "lucide-react";

interface NavMenuItemsProps {
    menuItems?: any[] | undefined;
}

const NavigationBarMenu: React.FC<NavMenuItemsProps> = ({menuItems}) => {
    const pathname = usePathname();

    return (
        <ul className="list-none text-primary-foreground flex">
            {menuItems && menuItems.length > 0 ? (
                menuItems.map( (item) => {
                    const itemPath = `/${item.slug}`;
                    const isActive = (pathname === itemPath) as boolean;
                    const hasChilds = (item?.child_items?.length > 0) as boolean;

                    return (
                        <li key={`${item.slug}_${item.id}`} className="relative flex items-center group after:w-px after:bg-primary-foreground after:h-3">
                            <Link href={item.url} className="relative flex items-center space-x-2 px-8 lg:py-4 lg:h-20">
                                <span className={cn(
                                    isActive && !hasChilds ? 'after:w-full ' : 'after:w-0 ',
                                    !hasChilds ? 'group-hover:after:w-full ' : '',
                                    'leading-none relative uppercase after:absolute after:left-0 after:mt-1 after:flex after:h-px after:transition-all after:duration-150 after:bg-primary-foreground'
                                )}>{item.title}</span>
                                {hasChilds && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all duration-150"/>}
                            </Link>
                            {hasChilds && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2">
                                    <ul className="bg-background shadow-lg text-gray-950 min-w-56 py-2 rounded-b-md">
                                        {item?.child_items.map( (childItem: any) => (
                                            <li key={`${childItem.slug}_${childItem.id}`}>
                                                <Link href={childItem.url} className="block px-6 py-1 hover:bg-gray-100">
                                                    {childItem.title}
                                                </Link>
                                            </li>
                                        ) )}
                                    </ul>
                                </div>
                            )}
                        </li>
                    )
                } )
            ) : (
                <div>No menu items found</div>
            )}
        </ul>
    );
};

export default NavigationBarMenu;
