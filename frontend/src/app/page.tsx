import React from "react";
import {Cover, PartnersCarousel} from "@/_components";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main role="main">
            <section>
                <Cover/>
            </section>

            <section className="bg-primary text-primary-foreground flex flex-col justify-center relative h-[82vh]">
                <div className="container">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="py-16 pr-16 space-y-12">
                            <h2 className="font-heading text-4xl mb-6">
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

            <section className="bg-white pt-16 pb-6">
                <PartnersCarousel/>
            </section>
        </main>
    );
}
