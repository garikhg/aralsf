"use client"import React from "react";import {useEffect, useState} from "react";import {motion, useAnimation, useViewportScroll} from "framer-motion";import NextLink from "next/link";import {BrandLogo} from "@/_components/Brand";import {    NavigationMenu,    NavigationMenuList,    NavigationMenuItem,    NavigationMenuLink,    NavigationMenuTrigger,    NavigationMenuContent,} from "@/components/ui/navigation-menu";import {cn} from "@/lib/utils";import {SearchForm} from "@/_components";const navigationMenuTriggerStyle = cn(    'bg-transparent text-md text-primary-foreground rounded-none uppercase hover:text-primary-foreground/80 hover:bg-transparent focus:text-primary-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary-foreground/80')const SiteHeader = () => {    const {scrollY} = useViewportScroll();    const controls = useAnimation();    const [lastScrollY, setLastScrollY] = useState(0);    const [scrollDirection, setScrollDirection] = useState('up');    useEffect(() => {        return scrollY.onChange((latest) => {            if (latest > lastScrollY) {                setScrollDirection('down');            } else {                setScrollDirection('up');            }            setLastScrollY(latest);            if (latest === 0 || lastScrollY <= 50 || scrollDirection === 'up') {                controls.start({                    y: 0,                    opacity: 1,                    transition: {duration: 0.3},                });            } else {                controls.start({                    y: '-100%',                    opacity: 0,                    transition: {duration: 0.3},                });            }        });    }, [scrollY, lastScrollY, scrollDirection, controls]);    return (        <motion.header            role="main"            animate={controls}            initial={{opacity: 1, y: 0}}            className="bg-primary py-4 sticky top-0 z-50"        >            <div className="container flex justify-between items-center">                <div className="flex items-center mr-auto">                    <NextLink href="/">                        <BrandLogo/>                    </NextLink>                </div>                <NavigationMenu>                    <NavigationMenuList className="gap-x-6 space-x-0">                        <NavigationMenuItem>                            <NavigationMenuTrigger className={navigationMenuTriggerStyle}>                                Products                            </NavigationMenuTrigger>                            <NavigationMenuContent>                                <div className="py-4 lg:w-[400px] lg:py-6 grid lg:grid-cols-2">                                    <ul className="flex flex-col lg:gap-2">                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/beers" className="px-4 lg:px-6">                                                Beer                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/wines" className="px-4 lg:px-6">                                                Wine                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/vodka" className="px-4 lg:px-6">                                                Vodka                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/whiskey" className="px-4 lg:px-6">                                                Whiskey                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/brandy" className="px-4 lg:px-6">                                                Brandy                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                    </ul>                                    <ul className="flex flex-col lg:gap-2">                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/tequila" className="px-4 lg:px-6">                                                Tequila                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/liquor" className="px-4 lg:px-6">                                                Liquor                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/gin" className="px-4 lg:px-6">                                                Gin                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                        <NavigationMenuItem>                                            <NavigationMenuLink href="/product-category/rum" className="px-4 lg:px-6">                                                Rum                                            </NavigationMenuLink>                                        </NavigationMenuItem>                                    </ul>                                </div>                            </NavigationMenuContent>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                        <NavigationMenuItem>                            <NextLink                                href="/categories"                                className="text-md text-primary-foreground hover:text-primary-foreground/80 font-medium px-4 py-2 transition-all duration-150 uppercase"                            >                                Categories                            </NextLink>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                        <NavigationMenuItem>                            <NextLink                                href="/about-us"                                className="text-md text-primary-foreground hover:text-primary-foreground/80 font-medium px-4 py-2 transition-all duration-150 uppercase"                            >                                About                            </NextLink>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                        <NavigationMenuItem>                            <NextLink                                href="/contact-us"                                className="text-md text-primary-foreground hover:text-primary-foreground/80 font-medium px-4 py-2 transition-all duration-150 uppercase"                            >                                Contact                            </NextLink>                        </NavigationMenuItem>                        <NavigationMenuItem className="text-primary-foreground text-xs">                            <span>|</span>                        </NavigationMenuItem>                    </NavigationMenuList>                </NavigationMenu>                <div className="ml-4">                    <SearchForm/>                </div>            </div>        </motion.header>    );};export default SiteHeader;