import React from 'react';
import {Container} from "@/components/container";
import {Metadata} from "next";
import {settings} from "@/config/settings";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: `All Products - ${settings.siteTitle}`,
        description: 'Aral Distributions for premium beverages. Since 2001, we\'ve delivered 50+ top brands like Nemiroff, with unmatched service and expertise in Northern California.'
    }
}

const ProductCategory = () => {
    return (
        <Container>
            All Products
        </Container>
    );
};

export default ProductCategory;
