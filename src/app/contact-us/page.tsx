'use client';import React, {useEffect} from 'react';import {Label} from "@/components/ui/label";import {Input} from "@/components/ui/input"import {Button} from "@/components/ui/button";import {Container} from "@/components/Container";import {    Breadcrumb,    BreadcrumbItem,    BreadcrumbLink,    BreadcrumbList, BreadcrumbPage,    BreadcrumbSeparator} from "@/components/ui/breadcrumb";import {Slash} from "lucide-react";import {Heading3, Heading5} from "@/components/ui/heading";import useSWR from 'swr';import {fetcher} from "@/lib/fetcher";import PageContent from "@/components/blocks/page-content";import Head from "next/head";const wordpressURL = process.env.NEXT_PUBLIC_WORDPRESS_URL;/*export const generateMetadata = async (): Promise<Metadata> => {    const getPage = await getPageBySlug( 'contact-us' );    const pageData = getPage[0] ?? {};    const pageTitle = pageData?.title?.rendered || '';    const pageDescription = pageData?.acf?.description ? pageData.acf.description : '';    return {        title: pageTitle,        description: pageDescription    };}*/interface ContactUsPageProps {    id: number;    title: {        rendered: string;    };}const ContactUs: React.FC = () => {    const url = `${wordpressURL}/wp-json/wp/v2/pages/?_embed&slug=contact-us`;    const {data, error, isLoading} = useSWR<any[]>( url, fetcher );    const page = data?.[0] ?? [];    const pageTitle = page?.title?.rendered || 'Contact Us';    useEffect( () => {        document.title = pageTitle;    }, [data] );    if (isLoading) {        return <div>Loading...</div>;    }    return (        <>            <Head>                <title>{pageTitle}</title>            </Head>            <section>                <iframe                    width={"100%"}                    height={550}                    style={{border: '0'}}                    allowFullScreen={true}                    loading="lazy"                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11503.238778685225!2d-73.46864243380251!3d43.88049439486082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccaa997ec2b3f99%3A0xf79ee869c7edb001!2sStreet%20Road%2C%20NY%2012883%2C%20USA!5e0!3m2!1sen!2sam!4v1723408614548!5m2!1sen!2sam"                    referrerPolicy="no-referrer-when-downgrade"                ></iframe>            </section>            {pageTitle && (                <Container className="hidden sm:block py-6 pb-0 md:py-6 md:pb-0 xl:py-6 xl:pb-0">                    <Breadcrumb>                        <BreadcrumbList>                            <BreadcrumbItem>                                <BreadcrumbLink href="/">Home</BreadcrumbLink>                            </BreadcrumbItem>                            <BreadcrumbSeparator><Slash/></BreadcrumbSeparator>                            <BreadcrumbItem>                                <BreadcrumbPage>{pageTitle}</BreadcrumbPage>                            </BreadcrumbItem>                        </BreadcrumbList>                    </Breadcrumb>                </Container>            )}            <Container>                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-24">                    <div className="col-span-1">                        <div className="relative pr-0 lg:pr-16">                            <PageContent pageData={page}/>                        </div>                    </div>                    <div className="col-span-1 pl-20">                        <div className="bg-primary text-primary-foreground rounded-lg p-10">                            <Heading5 className="font-semibold mb-4">                                Send us a message                            </Heading5>                            <form className="space-y-4">                                <div>                                    <Input                                        type="text"                                        id="name"                                        name="name"                                        placeholder="Your Name"                                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                    />                                    <Label htmlFor="name" className="sr-only">Your Name:</Label>                                </div>                                <div>                                    <Input                                        type="email"                                        id="email"                                        name="email"                                        placeholder="Your Email"                                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                    />                                    <Label htmlFor="email" className="sr-only">Email:</Label>                                </div>                                <div>                                    <Input                                        type="tel"                                        id="tel"                                        name="tel"                                        placeholder="Phone Numebr"                                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                    />                                    <Label htmlFor="tel" className="sr-only">Contact Number:</Label>                                </div>                                <div>                                    <Input                                        type="text"                                        id="subject"                                        name="subject"                                        placeholder="Subject"                                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                    />                                    <Label htmlFor="subject" className="sr-only">Subject:</Label>                                </div>                                <div>                                    <Label htmlFor="message">Message:</Label>                                    <Input                                        id="message"                                        name="message"                                        className="bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                    />                                </div>                                <Button type="submit"                                        className="w-full h-14 bg-yellow hover:bg-yellow hover:opacity-80 text-primary text-md px-4 rounded-full transition-all duration-150 uppercase mt-10">Send                                    Message</Button>                            </form>                        </div>                    </div>                </div>            </Container>        </>    );};export default ContactUs;