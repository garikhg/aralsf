import React from 'react';
import {cn} from "@/lib/utils";

const ProductGrid = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn( 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4', className )}>
            {children}
        </div>
    );
};

export default ProductGrid;
