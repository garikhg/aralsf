'use client';

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Container} from "@/components/container";

const ProductCategory = () => {
    const router = useRouter();

    useEffect( () => {
        router.push( '/categories' );
    }, [router] );

    return (
        <Container className="min-h-screen">
            Redirect to categories...
        </Container>
    );
};

export default ProductCategory;
