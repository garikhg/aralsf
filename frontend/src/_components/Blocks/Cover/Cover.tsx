import * as React from 'react';import Image from "next/image";import NextLink from "next/link";const Cover = () => {    return (        <div className="relative min-h-[674px] flex flex-col justify-center">            <Image                src="/images/demo/banner11.jpg"                alt="Welcome to Aral Distributions"                width={1920}                height={674}                priority                className="h-auto w-full max-w-full absolute object-cover rattio top-0 right-0 left-0 z-0"            />            <div className="container relative z-10">                <div className="grid grid-cols-2 gap-x-4">                    <div className="col-span-1"></div>                    <div className="col-span-1 flex flex-col items-center text-center">                        <h2 className="scroll-m-20 pb-2 font-heading text-4xl">                            Welcome to Aral Distributions                        </h2>                        <span className="block w-2/12 h-0.5 bg-yellow my-4"></span>                        <p className="text-lg font-light">                            Since 2001, we've been bridging European alcohol culture with Northern California.                            Representing over 50 top brands, including Nemiroff, we are your trusted partner in wholesale distribution.                            Experience excellence with our dedicated team and 12 years of expertise.                        </p>                        <div className="mt-8">                            <NextLink                                href="/about-us"                                className="font-light underline-offset-1 hover:underline"                            >                                About Us                            </NextLink>                        </div>                    </div>                </div>            </div>        </div>    );};export default Cover;