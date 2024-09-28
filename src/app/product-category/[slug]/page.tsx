import React from 'react';
import {Metadata} from "next";
import {getProductsByCategory} from "@/lib/wordpress";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    return {
        title: 'Products Category Wines',
        description: 'Products Category Wines Description'
    }
}

const ProductCategory = async ({params}: { params: { slug: string } }) => {
    const products = await getProductsByCategory( 4 );

    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 md:col-span-4">
                    Filters
                </div>

                <div className="col-span-12 md:col-span-8">
                    {products && products.map( (product) => (
                        <div key={product.slug} className="relative">
                            <h3 dangerouslySetInnerHTML={{__html: product?.title?.rendered}}/>
                        </div>
                    ) )}
                </div>


            </div>
        </div>
    );
};

export default ProductCategory;
