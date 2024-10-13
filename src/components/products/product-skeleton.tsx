import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const ProductSkeleton = () => {
    return (
        <div className="bg-white w-full rounded-xl p-4">
            <Skeleton className="bg-gray-200 h-80 w-full rounded-xl overflow-hidden mb-4"/>
            <Skeleton className="bg-gray-200 h-5 w-48 rounded-xl overflow-hidden"/>
            <div className="space-y-2 pt-6">
                <Skeleton className="bg-gray-200 h-4 w-full rounded-xl overflow-hidden"/>
                <Skeleton className="bg-gray-200 h-4 w-full rounded-xl overflow-hidden"/>
                <Skeleton className="bg-gray-200 h-4 w-full rounded-xl overflow-hidden"/>
            </div>
        </div>
    );
};

export default ProductSkeleton;
