import React from 'react';
import PageBreadcrumb from "@/components/page-breadcrumb";
import {fetchPageApi} from "@/lib/api";
import PageHeader from "@/components/page-header";
import PartnersGrid from "@/components/partners/partners-grid";
import {Metadata} from "next";

export const revalidate = 0;

const clients = [
    {
        id: 'client-1a',
        name: 'Client 1',
        image: {
            url: '/images/demo/clients/client-1a.png',
            width: 100,
            height: 101,
        },
    },
    {
        id: 'client-2a',
        name: 'Client 2',
        image: {
            url: '/images/demo/clients/client-2a.png',
            width: 123,
            height: 101,
        },
    },
    {
        id: 'client-3a',
        name: 'Client 3',
        image: {
            url: '/images/demo/clients/client-3a.png',
            width: 151,
            height: 101,
        },
    },
    {
        id: 'client-4a',
        name: 'Client 4',
        image: {
            url: '/images/demo/clients/client-4a.png',
            width: 157,
            height: 101,
        },
    },
    {
        id: 'client-5',
        name: 'Client 5',
        image: {
            url: '/images/demo/clients/client-5.png',
            width: 93,
            height: 101,
        },
    },
    {
        id: 'client-6',
        name: 'Client 6',
        image: {
            url: '/images/demo/clients/client-6.png',
            width: 93,
            height: 101,
        },
    },
    {
        id: 'client-7',
        name: 'Client 7',
        image: {
            url: '/images/demo/clients/client-7.png',
            width: 142,
            height: 101,
        },
    },
    {
        id: 'client-8a',
        name: 'Client 8',
        image: {
            url: '/images/demo/clients/client-8a.png',
            width: 212,
            height: 101,
        },
    },
    {
        id: 'client-9a',
        name: 'Client 9',
        image: {
            url: '/images/demo/clients/client-9a.png',
            width: 212,
            height: 101,
        },
    },
    {
        id: 'client-11a',
        name: 'Client 11',
        image: {
            url: '/images/demo/clients/client-11a.png',
            width: 212,
            height: 101,
        },
    },
    {
        id: 'client-12',
        name: 'Client 12',
        image: {
            url: '/images/demo/clients/client-12.png',
            width: 212,
            height: 101,
        },
    }
];

export const generateMetadata = async (): Promise<Metadata> => {
    const page = await fetchPageApi( 'about-us' );
    const title = page?.title?.rendered ?? 'About Us';
    const description = page?.acf?.description ?? '';

    return {
        title: title,
        description: description,
    };
};

const AboutUsPage = async () => {
    const page = await fetchPageApi( 'about-us' );

    return (
        <div>
            <PageHeader data={page}/>
            <div className="container py-8 xl:py-16 xl:pt-6">
                <PageBreadcrumb loading={false}/>
                <div className="py-8 lg:py-16 xl:py-24">
                    <div className="mb-6">
                        <p className="text-sm leading-normal tracking-wider uppercase text-[#b46d66] mb-2">
                            Elevating Taste
                        </p>
                        <h1 className="scroll-m-20 text-4xl font-belleza tracking-wide uppercase lg:text-5xl">
                            Aral Distributions
                        </h1>
                    </div>
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 text-xl font-belleza leading-relaxed">
                        <p>
                            Founded in 2001 by Aram Harutyunyan, a former winemaker, Aral Distributions has been a
                            pioneering force in introducing and cultivating European alcohol culture in Northern
                            California. Our mission is to elevate the regional market by offering an exceptional
                            selection of premium beverages and unparalleled service. Representing over 50 distinguished
                            brands, including industry leaders such as Nemiroff, we are proud to be a prominent
                            distributor in the Northern California alcohol beverage sector.
                        </p>
                        <p>
                            Our extensive portfolio reflects our commitment to quality and our deep understanding of the
                            market’s diverse needs. With over 12 years of expertise in wholesale distribution, our
                            dedicated team is focused on delivering the highest standards of professionalism and
                            customer satisfaction. We strive to make every interaction with Aral Distributions a
                            seamless and rewarding experience, leveraging our industry knowledge and commitment to
                            excellence.
                        </p>
                    </div>
                </div>
            </div>

            <PartnersGrid data={clients}/>
        </div>
    );
};

export default AboutUsPage;
