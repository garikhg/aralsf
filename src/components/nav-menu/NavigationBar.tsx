'use client';

import React, {useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {AlignJustify, ChevronDown, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";

interface NavMenuItemsProps {
    menuItems?: any[] | undefined;
}

const NavigationBar: React.FC<NavMenuItemsProps> = ({menuItems}) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState( false );
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState( false );

    return (
        <>
            <ul className="hidden list-none text-primary-foreground lg:flex">
                {menuItems && menuItems.length > 0 ? (
                    menuItems.map( (item) => {
                        const itemPath = `/${item.slug}`;
                        const isActive = (pathname === itemPath) as boolean;
                        const hasChilds = (item?.child_items?.length > 0) as boolean;

                        return (
                            <li key={`${item.slug}_${item.id}`}
                                className="relative flex items-center group after:w-px after:bg-primary-foreground after:h-3"
                            >
                                <Link href={item.url}
                                      className="text-sm relative flex items-center space-x-2 px-8 lg:py-4 lg:h-20"
                                >
                                <span className={cn(
                                    isActive && !hasChilds ? 'after:w-full ' : 'after:w-0 ',
                                    !hasChilds ? 'group-hover:after:w-full ' : '',
                                    'leading-none relative uppercase after:absolute after:left-0 after:mt-1 after:flex after:h-px after:transition-all after:duration-150 after:bg-primary-foreground'
                                )}>{item.title}</span>
                                    {hasChilds && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all duration-150"/>}
                                </Link>
                                {hasChilds && (
                                    <div
                                        className="h-0 absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 overflow-hidden origin-top scale-y-0 z-0 group-hover:h-auto group-hover:scale-y-100 group-hover:overflow-visible">
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

            {menuItems && menuItems.length > 0 && (
                <Drawer direction="left"
                        open={isOpen}
                        onOpenChange={setIsOpen}
                >
                    <DrawerTrigger asChild>
                        <Button
                            variant="link"
                            className="lg:hidden group relative text-white no-underline px-0"
                        >
                            <AlignJustify strokeWidth={1} className={cn(
                                isOpen ? 'opacity-0' : '',
                                'absolute transition-all duration-200 w-9 h-9'
                            )}/>
                            <X strokeWidth={1} className={cn(
                                isOpen ? '' : 'opacity-0',
                                'absolute transition-all duration-200 w-9 h-9'
                            )}/>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="flex justify-between items-center border-b border-gray-100 py-2">
                            <DrawerTitle>Menu</DrawerTitle>
                            <DrawerDescription className="sr-only">Menu</DrawerDescription>
                            <DrawerClose asChild>
                                <Button
                                    variant="ghost"
                                    className="w-10 rounded-full p-1"
                                    onClick={() => setIsOpen( false )}
                                >
                                    <X strokeWidth={1} className="w-7 h-7"/>
                                    <span className="sr-only">Close Menu</span>
                                </Button>
                            </DrawerClose>
                        </DrawerHeader>

                        <ul className="list-none space-y-px p-4 -mx-4">
                            {menuItems.map( (item: any) => {
                                const itemPath = `/${item.slug}`;
                                const isActive = (pathname === itemPath) as boolean;
                                const hasChilds = (item?.child_items?.length > 0) as boolean;

                                const handlerMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
                                    if (!hasChilds) {
                                        setIsOpen( false );
                                    } else {
                                        event.preventDefault()
                                        if (!mobileSubmenuOpen) {
                                            setMobileSubmenuOpen( true );
                                        } else {
                                            setMobileSubmenuOpen( false );
                                        }
                                    }
                                }

                                if (!isOpen && mobileSubmenuOpen) {
                                    setMobileSubmenuOpen( false );
                                }

                                return (
                                    <li
                                        key={`${item.slug}-${item.id}`}
                                        className="group"
                                    >
                                        <Link
                                            href={item.url}
                                            onClick={(e) => handlerMenuItemClick( e )}
                                            className={cn(
                                                'flex justify-between items-center group-hover:bg-gray-100 py-2.5 px-4',
                                                isActive ? 'bg-gray-100' : '',
                                                mobileSubmenuOpen && hasChilds ? 'rounded-t-3xl' : 'rounded-full'
                                            )}
                                        >
                                            <span>{item.title}</span>
                                            {hasChilds && (
                                                <ChevronDown
                                                    strokeWidth={1}
                                                    className={cn(
                                                        'w-6 h-6 transition-all duration-200',
                                                        mobileSubmenuOpen ? 'rotate-180' : ''
                                                    )}
                                                />
                                            )}
                                        </Link>

                                        {hasChilds && (
                                            <ul className={cn(
                                                'list-none bg-gray-100 border-b border-gray-200 transition-all origin-top duration-150 px-2',
                                                mobileSubmenuOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                                            )}>
                                                {item.child_items.map( (childItem: any) => (
                                                    <li key={`${childItem.slug}-${childItem.id}`}>
                                                        <Link href={childItem.url}
                                                              className="block px-4 py-2"
                                                              onClick={() => setIsOpen( false )}
                                                        >
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
