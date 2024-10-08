import React from 'react';

interface ProductsListProps {
    data: any[];
}

const ProductsList: React.FC<ProductsListProps> = ({data}) => {

    console.log( data );
    return (
        <div>

        </div>
    );
};

export default ProductsList;
