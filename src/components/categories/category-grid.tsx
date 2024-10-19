import React from 'react';
import {cn} from "@/lib/utils";

const CategoryGrid = ({children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn( 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4', className )}>
            {children}
        </div>
    );
};

export default CategoryGrid;
