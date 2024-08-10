import React from 'react';import DeveloperLogo from "@/_components/DeveloperLogo";import {SocialLinks} from "@/_components";import Link from "next/link";import {FooterHeading} from "@/_components/Footer/FooterBlocks";const SiteFooter = () => {    return (        <footer className="relative flex flex-col gap-y-16 bg-primary text-primary-foreground mt-auto py-16">            <div className="container">                <div className="grid grid-cols-12 justify-between gap-6">                    <div className="col-span-5">                        <div className="w-60 h-full flex flex-col gap-y-4">                            <FooterHeading                                href={true}                                description="Bringing European Alcohol Culture to Northern California Since 2001."                            />                            <div className="mt-auto">                                <SocialLinks/>                            </div>                        </div>                    </div>                    <div className="col-span-7 grid grid-cols-3 -mx-12">                        <div className="flex flex-col items-end px-12">                            <div className="flex flex-col gap-y-6">                                <h5 className="font-heading font-semibold text-lg">                                    Information                                </h5>                                <ul className="list-none flex flex-col gap-y-3">                                    <li>                                        <Link                                            href="/products"                                            className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"                                        >                                            Products                                        </Link>                                    </li>                                    <li>                                        <Link                                            href="/about-us"                                            className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"                                        >                                            About Us                                        </Link>                                    </li>                                    <li>                                        <Link                                            href="/contact-us"                                            className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"                                        >                                            Contacts                                        </Link>                                    </li>                                </ul>                            </div>                        </div>                        <div className="flex flex-col items-end border-l border-primary-foreground/30 px-12">                            <div className="flex flex-col gap-y-6">                                <h5 className="font-heading font-semibold text-lg">                                    Head Office                                </h5>                                <p>                                    Valentin, Street Road 24,                                    New York, USA – 67452                                </p>                            </div>                        </div>                        <div className="flex flex-col items-end border-l border-primary-foreground/30 px-12">                            <div className="flex flex-col gap-y-6">                                <h5 className="w-full block font-heading font-semibold text-lg">                                    Contact Us                                </h5>                                <div className="space-y-1">                                    <p><span className="font-semibold">Tel:</span> +1-212-456-7890</p>                                    <p><span className="font-semibold">Email:</span> Info@aralsf.com</p>                                </div>                            </div>                        </div>                    </div>                </div>            </div>            <div className="container">                <div className="border-t border-white/30 pt-6">                    <div className="flex flex-col gap-y-2">                        <p className="text-sm flex items-center gap-x-2">                            © 2001 – 2024 <span className="text-xs">|</span> ARAL Inc. All register Reserved                        </p>                        <div>                            <a href="https://code-craft.am/"                               target="_blank"                               className="text-sm font-semibold flex items-center gap-x-1 w-fit"                            >                                <DeveloperLogo width={18} height={18} className="text-[#a8cf45]"/>                                <span>by CodeCraft</span>                            </a>                        </div>                    </div>                </div>            </div>        </footer>    );};export default SiteFooter;