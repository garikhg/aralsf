'use client';

import React, {useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {AlignJustify, ChevronDown, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";

interface MenuItem {
    id: number;
    title: string;
    slug: string;
    url: string;
    child_items?: MenuItem[];
}

interface NavMenuItemsProps {
    menuItems?: MenuItem[];
}

const NavigationBar: React.FC<NavMenuItemsProps> = ({menuItems = []}) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState( false );
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>( null );

    const toggleSubmenu = (slug: string) => {
        setMobileSubmenuOpen( (prev) => (prev === slug ? null : slug) );
    }

    const MenuItem = ({item}: { item: MenuItem }) => {
        const itemPath = `/${item.slug}`;
        const isActive = pathname === itemPath;
        const hasChildren = item?.child_items && item?.child_items?.length > 0;

        return (
            <li key={`${item.slug}${item.id}`} className="relative flex items-center group">
                <Link href={item.url} className="text-sm relative flex items-center space-x-2 px-8 lg:py-4 lg:h-20">
                    <span className={cn(
                        isActive && !hasChildren ? 'after:w-full' : 'after:w-0',
                        !hasChildren ? 'group-hover:after:w-full' : '',
                        'leading-none relative uppercase after:absolute after:left-0 after:mt-1 after:flex after:h-px after:transition-all after:duration-150 after:bg-primary-foreground'
                    )}>
                        {item.title}
                    </span>
                    {hasChildren && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all duration-150"/>}
                </Link>

                {hasChildren && (
                    <div className="h-0 absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 overflow-hidden origin-top scale-y-0 z-0 group-hover:h-auto group-hover:scale-y-100 group-hover:overflow-visible">
                        <ul className="bg-background shadow-lg text-gray-950 min-w-56 py-2 rounded-b-md">
                            {item.child_items?.map( (childItem) => (
                                <li key={`${childItem.slug}${childItem.id}`}>{/* Ensure `childItem.id` is unique */}
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
    }

    return (
        <>
            {/* Desktop Navigation */}
            <ul className="hidden list-none text-primary-foreground lg:flex">
                {menuItems.length > 0 && menuItems.map( (item) => <MenuItem key={`${item.slug}${item.id}`} item={item}/> )}
            </ul>

            {/* Mobile Navigation */}
            {menuItems && menuItems.length > 0 && (
                <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerTrigger asChild>
                        <Button variant="link" className="lg:hidden group relative text-white no-underline px-0">
                            <AlignJustify strokeWidth={1} className={cn( isOpen ? 'opacity-0' : '', 'absolute transition-all duration-200 w-9 h-9' )}/>
                            <X strokeWidth={1} className={cn( isOpen ? '' : 'opacity-0', 'absolute transition-all duration-200 w-9 h-9' )}/>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="flex justify-between items-center border-b border-gray-100 py-2">
                            <DrawerTitle>Menu</DrawerTitle>
                            <DrawerDescription className="sr-only">Menu</DrawerDescription>
                            <DrawerClose asChild>
                                <Button variant="ghost" className="w-10 rounded-full p-1" onClick={() => setIsOpen( false )}>
                                    <X strokeWidth={1} className="w-7 h-7"/>
                                    <span className="sr-only">Close Menu</span>
                                </Button>
                            </DrawerClose>
                        </DrawerHeader>

                        <ul className="list-none space-y-px p-4 -mx-4">
                            {menuItems.map( (item) => {
                                const hasChildren = item?.child_items && item?.child_items?.length > 0;

                                return (
                                    <li key={`${item.slug}${item.id}`} className="group">
                                        <Link
                                            href={item.url}
                                            onClick={(e) => {
                                                if (hasChildren) {
                                                    e.preventDefault();
                                                    toggleSubmenu( item.slug );
                                                } else {
                                                    setIsOpen( false );
                                                }
                                            }}
                                            className={cn( 'flex justify-between items-center group-hover:bg-gray-100 rounded-full py-2.5 px-4', pathname === `/${item.slug}` && 'bg-gray-100' )}
                                        >
                                            <span>{item.title}</span>
                                            {hasChildren && <ChevronDown strokeWidth={1} className={cn( 'w-6 h-6 transition-all duration-200', mobileSubmenuOpen ? 'rotate-180' : '' )}/>}
                                        </Link>

                                        {hasChildren && (
                                            <ul className={cn(
                                                'list-none bg-gray-100 border-b border-gray-200 transition-all origin-top duration-150 px-2',
                                                mobileSubmenuOpen === item.slug ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                                            )}>
                                                {item?.child_items && item.child_items.map( (childItem) => (
                                                    <li key={`${childItem.slug}${childItem.id}`}>
                                                        <Link href={childItem.url} className="block px-4 py-2" onClick={() => setIsOpen( false )}>
                                                            {childItem.title}
                                                        </Link>
                                                    </li>
                                                ) )}
                                            </ul>
                                        )}
                                    </li>
                                )
                            } )}
                        </ul>
                    </DrawerContent>
                </Drawer>
            )}
        </>
    );
};

export default NavigationBar;
