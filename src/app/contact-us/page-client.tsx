'use client'

import React from 'react';
import Breadcrumbs from "@/components/breadcrumbs";
import {Container} from "@/components/Container";
import BlockPageContent from "@/components/blocks/block-page-content";
import ContactForms from "@/components/contact-forms";
import {usePage} from "@/hooks/use-pages";

const PageClient = () => {
    const {page, isLoading, isError} = usePage( 'contact-us' );

    if (isLoading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
    if (isError) return <div className="container mx-auto px-4 py-8">Error loading page</div>;
    if (!page) return <div className="container mx-auto px-4 py-8">Page not found</div>;

    return (
        <>
            <section>
                <iframe
                    width={"100%"}
                    height={550}
                    style={{border: '0'}}
                    allowFullScreen={true}
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11503.238778685225!2d-73.46864243380251!3d43.88049439486082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccaa997ec2b3f99%3A0xf79ee869c7edb001!2sStreet%20Road%2C%20NY%2012883%2C%20USA!5e0!3m2!1sen!2sam!4v1723408614548!5m2!1sen!2sam"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <Breadcrumbs title={page?.title?.rendered}/>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-24">
                    <div className="col-span-1">
                        <div className="relative pr-0 lg:pr-16">
                            <BlockPageContent pageData={page}/>
                        </div>
                    </div>

                    <div className="col-span-1 xl:pl-20">
                        <ContactForms/>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PageClient;
