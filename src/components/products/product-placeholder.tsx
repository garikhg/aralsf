import React from 'react';
import { Image } from 'lucide-react';

const ProductPlaceholderImage = () => {
    return (
        <div className="min-h-[435px] flex items-center bg-gray-50 text-gray-100 w-full rounded-xl overflow-hidden">
            <Image strokeWidth={1.1} className="w-full h-full" />
        </div>
    );
};

export default ProductPlaceholderImage;
