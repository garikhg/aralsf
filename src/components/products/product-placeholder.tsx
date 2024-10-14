import React from 'react';
import { Image } from 'lucide-react';

const ProductPlaceholderImage = () => {
    return (
        <div className="h-96 flex items-center bg-gray-50 text-gray-100 w-full rounded-xl overflow-hidden">
            <Image strokeWidth={1.1} className="w-[290px] h-[384px]" />
        </div>
    );
};

export default ProductPlaceholderImage;
