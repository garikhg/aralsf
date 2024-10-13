import React from 'react';
import Link from 'next/link';
import DeveloperLogo from '@/components/DeveloperLogo';
import {BrandLogo, SocialLinks} from '@/components';
import {settings} from '@/config/settings';
import {Heading5} from "@/components/ui/heading";
import {Container} from "@/components/container";

const productsLinks = [
    {
        id: 'wines',
        label: 'Wine’s',
        path: '/product-category/wines',
        slug: 'wines'
    },
    {
        id: 'beers',
        label: 'Beer’s',
        path: '/product-category/beers',
        slug: 'beers'
    },
    {
        id: 'brandy',
        label: 'Brandy',
        path: '/product-category/brandy',
        slug: 'brandy'
    },
    {
        id: 'gin',
        label: 'Gin',
        path: '/product-category/gin',
        slug: 'gin'
    },
    {
        id: 'liquor',
        label: 'Liquor',
        path: '/product-category/liquor',
        slug: 'liquor'
    },
    {
        id: 'rum',
        label: 'Rum',
        path: '/product-category/rum',
        slug: 'rum'
    },
    {
        id: 'vodka',
        label: 'Vodka',
        path: '/product-category/vodka',
        slug: 'vodka'
    },
    {
        id: 'whiskey',
        label: 'Whiskey',
        path: '/product-category/whiskey',
        slug: 'whiskey'
    }
]

const infoLinks = [
    {
        id: 'categories',
        label: 'Categories',
        path: '/categories',
        slug: 'categories'
    },
    {
        id: 'products',
        label: 'Products',
        path: '/product-category/wines',
        slug: 'product-category'
    },
    {
        id: 'about_us',
        label: 'About Us',
        path: '/about-us',
        slug: 'about-us'
    },
    {
        id: 'contacts',
        label: 'Contacts',
        path: '/contact-us',
        slug: 'contact-us'
    }
]

const FooterHeading = () => {
    return (
        <div className="space-y-4 lg:space-y-6">
            <Link href="/" className="flex items-center">
                <BrandLogo label={settings.siteTitle}/>
                <span className="sr-only">{settings.siteTitle}</span>
            </Link>

            <div className="w-full max-w-60 space-y-4">
                <p className="text-sm text-primary-foreground/85 leading-6">{settings.siteDescription}</p>
                <SocialLinks/>
            </div>
        </div>
    )
}

const FooterAddress = () => {
    return (
        <div className="space-y-2">
            <Heading5 className="text-md">
                Head Office
            </Heading5>
            <p>
                Valentin, Street Road 24,<br/>
                New York, USA – 67452
            </p>
        </div>
    )
}

const FooterContact = () => {
    return (
        <div className="space-y-2">
            <Heading5 className="text-md">
                Contact Us
            </Heading5>
            <div>
                <p><span className="font-semibold">Tel:</span> +1-212-456-7890</p>
                <p><span className="font-semibold">Email:</span> Info@aralsf.com</p>
            </div>
        </div>
    )
}

const FooterLinks = () => {
    return (
        <div className="space-y-2">
            <Heading5 className="text-md">
                Information
            </Heading5>
            <ul className="list-none flex flex-col gap-y-2">
                {infoLinks && infoLinks.map( (link) => (
                    <li key={link.id}>
                        <Link href={link.path}
                              className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                        >
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

const FooterProductsLinks = () => {
    return (
        <div className="space-y-2">
            <Heading5 className="text-md">
                Products
            </Heading5>
            <ul className="list-none flex flex-col gap-y-2">
                {productsLinks && productsLinks.map( (link) => (
                    <li key={link.id}>
                        <Link href={link.path}
                              className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                        >
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

const FooterCopyright = () => {
    return (
        <div
            className="flex flex-col items-center md:items-start space-y-1 text-center border-t border-primary-foreground/20 pt-8 mt-10 lg:mt-16 mb-3 md:mb-0">
            <p className="text-sm text-center md:text-left flex items-center gap-2">
                ©2001 – 2024 <span className="text-[11px]">|</span> ARAL Inc. All rights reserved.
            </p>
            <a
                href="https://code-craft.am/"
                target="_blank"
                className="text-sm font-semibold flex items-center gap-x-1 w-fit"
            >
                <DeveloperLogo width={16} height={16} className="text-[#a8cf45]"/>
                <span>by CodeCraft</span>
            </a>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="relative bg-primary text-primary-foreground overflow-hidden mt-auto">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-24">

                    <div className="hidden lg:block col-span-12 lg:col-span-4 xl:col-span-3">
                        <FooterHeading/>
                    </div>

                    <div className="col-span-1 lg:col-span-8 xl:col-span-9">
                        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
                            <div className="hidden col-span-1 xl:block"></div>
                            <div className="col-span-1 space-y-6">
                                <FooterLinks/>
                            </div>
                            <div className="col-span-1 space-y-6">
                                <FooterProductsLinks/>
                            </div>
                            <div className="col-span-1 space-y-6">
                                <FooterAddress/>
                                <FooterContact/>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterCopyright/>
            </Container>
        </footer>

    );
};

export default Footer;
