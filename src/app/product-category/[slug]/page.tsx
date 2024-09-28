import React from 'react';
import {Metadata} from "next";
import {getProductCategoryBySlug, getProductsByCategoryId} from "@/lib/wordpress";
import ProductCard from "@/components/product/product-card";
import {settings} from "@/config/settings";
import {Container} from "@/components/container";

export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const categories = await getProductCategoryBySlug( params.slug );
    const categoryTitle = categories[0]?.name ? `${categories[0]?.name} - ${settings.siteTitle}` : '';
    const categoryDescription = categories[0]?.description ? categories[0]?.description : '';

    return {title: categoryTitle, description: categoryDescription}
}

const ProductCategory: React.FC<{ params: { slug: string } }> = async ({params}) => {
    const categories = await getProductCategoryBySlug( params.slug );
    const products = await getProductsByCategoryId( categories[0]?.id );

    return (
        <Container>
            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 md:col-span-3">
                    Filters
                </div>

                <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-3 gap-4">
                        {products && products.map( (product: any) => (
                            <ProductCard
                                key={product.id}
                                data={product}
                            />
                        ) )}
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default ProductCategory;
