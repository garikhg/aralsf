"use client"import * as React from 'react';import NextLink from "next/link";import {BrandLogo} from "@/_components/Brand";import {Button} from "@/components/ui/button";import {Search} from "lucide-react";import {    NavigationMenu,    NavigationMenuItem,    NavigationMenuList,} from "@/components/ui/navigation-menu";const SiteHeader = () => {    return (        <header className="bg-primary py-4" role="main">            <div className="container flex justify-between items-center">                <div className="flex items-center mr-auto">                    <NextLink href="/">                        <BrandLogo/>                    </NextLink>                </div>                <NavigationMenu>                    <NavigationMenuList className="gap-x-6">                        <NavigationMenuItem>                            <NextLink                                href="/products"                                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-150 uppercase"                            >                                Products                            </NextLink>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                        <NavigationMenuItem>                            <NextLink                                href="/about-us"                                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-150 uppercase"                            >                                About                            </NextLink>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                        <NavigationMenuItem>                            <NextLink                                href="/contact-us"                                className="text-primary-foreground hover:text-primary-foreground/80 transition-all duration-150 uppercase"                            >                                Contact                            </NextLink>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                    </NavigationMenuList>                </NavigationMenu>                <div className="ml-4">                    <Button variant="default" size="default"                            className="h-14 w-14 p-4 text-primary-foreground hover:text-primary-foreground/80 transition-all duration-150">                        <Search size={24}/>                        <span className="sr-only">Search</span>                    </Button>                </div>            </div>        </header>    );};export default SiteHeader;