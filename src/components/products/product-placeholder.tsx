import React from 'react';
import { Image } from 'lucide-react';

const ProductPlaceholderImage = () => {
    return (
        <div className="flex items-center bg-gray-100 text-gray-200 h-80 w-full rounded-xl overflow-hidden">
            <Image strokeWidth={1.3} className="w-full h-auto" />
        </div>
    );
};

export default ProductPlaceholderImage;
