import * as React from 'react';import NextLink from 'next/link';const Cover = () => {  return (    <div className="relative overflow-hidden">      <img        src="/images/demo/banner11.jpg"        alt="Welcome to Aral Distributions"        className="h-full w-full object-cover absolute top-0 left-0 -translate-x-2/4 lg:translate-x-0"      />      <div className="container h-full relative flex flex-col py-24 lg:py-48 z-10">        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 my-auto">          <div></div>          <div className="flex flex-col items-center text-center">            <h2 className="scroll-m-20 pb-2 text-4xl font-bold">              Welcome to Aral Distributions            </h2>            <span className="block w-2/12 h-0.5 bg-yellow my-4"></span>            <p className="text-lg font-light">              Since 2001, weve been bridging European alcohol culture with Northern California. Representing over 50 top              brands, including Nemiroff, we are your trusted partner in wholesale distribution. Experience excellence with              our dedicated team and 12 years of expertise.            </p>            <div className="mt-8">              <NextLink                href="/about-us"                className="font-light underline-offset-1 hover:underline"              >                About Us              </NextLink>            </div>          </div>        </div>      </div>    </div>  );};export default Cover;