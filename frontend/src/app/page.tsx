import React from "react";
import {Cover, PartnersCarousel} from "@/_components";

export default function Home() {
    return (
        <main role="main">
            <section className="">
                <Cover/>
            </section>

            <section className="bg-white py-16">
                <PartnersCarousel/>
            </section>
        </main>
    );
}
