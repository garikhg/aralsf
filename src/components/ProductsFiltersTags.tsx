'use client';

import React from 'react';
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";

interface ProductsFiltersTagsProps {
    activeFilters: { [key: string]: string[] };
    onRemoveFilter: (filterType: any, value: string) => void;
}

const ProductsFiltersTags: React.FC<ProductsFiltersTagsProps> = ({activeFilters, onRemoveFilter}) => {
    return (
        <div className="flex flex-wrap gap-1 mb-4">
            {Object.keys( activeFilters ?? {} ).map( (filterType: any) => (
                activeFilters![filterType].map( (filterValue: any) => (
                    <div key={`${filterType}-${filterValue}`} className="filter-tag">
                        <Button
                            variant="ghost"
                            className="bg-gray-200 hover:bg-gray-950 hover:text-primary-foreground rounded-full space-x-1 h-8"
                            onClick={() => onRemoveFilter( filterType, filterValue )}
                        >
                            <span className="uppercase text-xs">{filterValue}</span>
                            <X strokeWidth={1} className="w-3 h-3"/>
                        </Button>
                    </div>
                ) )
            ) )}
        </div>
    );
};

export default ProductsFiltersTags;
