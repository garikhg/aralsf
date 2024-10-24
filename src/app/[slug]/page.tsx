import {Metadata} from 'next';
import React from 'react';
import {fetchPageApi} from "@/lib/api";
import PageClient from "@/app/[slug]/page-client";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const data = await fetchPageApi( params.slug );
    const title = data?.title?.rendered;

    return {
        title: title,
    };
};

export default async function Pages({params}: { params: { slug: string } }) {
    return <PageClient slug={params.slug}/>;
}
