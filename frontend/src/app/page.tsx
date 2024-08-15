"use client";

import React from "react";
import {Cover, HeroSlider, PartnersCarousel} from "@/_components";
import Image from "next/image";
import Link from "next/link";
import {gql, useQuery} from "@apollo/client";
import {WordPressBlocksViewer} from "@/components/blocks/WordPressBlocksViewer";



export default function Home() {
    const {loading, error, data} = useQuery( GET_HOMEPAGE );

    if (error) return <p>{error.message}</p>
    if (loading) return <p>Loading...</p>
    const {editorBlocks} = data?.page ?? '';

    return (
        <main role="main">

            <HeroSlider/>

            <Cover/>

            <WordPressBlocksViewer blocks={editorBlocks}/>


            <section className="bg-primary text-primary-foreground flex flex-col justify-center relative h-[82vh]">
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="py-16 pr-16 space-y-12">
                            <h2 className="text-4xl font-semibold mb-6">
                                Elevate Your Selection with Our Premium Beers
                            </h2>
                            <div className="space-y-4 text-lg font-light leading-7">
                                <p>
                                    Dive into our exceptional beer collection, meticulously curated for the discerning distributor. From the
                                    clean, crisp notes of premium lagers to the bold, hoppy flavors of IPAs, and the rich, complex profiles
                                    of stouts and sours, we offer a diverse selection to enhance your inventory.
                                </p>

                                <p>
                                    Whether you’re seeking timeless classics or innovative seasonal brews,
                                    our portfolio caters to all tastes and preferences. Elevate your offerings with our expertly selected
                                    beers that promise unparalleled quality and distinction.
                                </p>
                            </div>
                            <div>
                                <Link
                                    href="/products"
                                    className="text-md text-primary-foreground hover:underline p-0"
                                >
                                    Browse Our Beers
                                </Link>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="w-3/6 h-full absolute top-0 left-auto right-0 lg:pl-3">
                    <Image
                        src="/images/demo/home-beers-1.jpg"
                        alt="beer"
                        width={1920}
                        height={1280}
                        priority
                        className="w-full h-full object-cover max-w-full"
                    />
                </div>
            </section>

            <PartnersCarousel/>

        </main>
    );
}

const GET_HOMEPAGE = gql`
    query GetHomepageQuery {
        page(id: "homepage", idType: URI) {
            title
            editorBlocks(flat: false) {
                __typename
                renderedHtml
                innerBlocks {
                    apiVersion
                    blockEditorCategoryName
                    clientId
                    name
                    parentClientId
                    renderedHtml
                }
            }
        }
    }
`
