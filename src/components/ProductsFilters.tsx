'use client';

import React from 'react';
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface CountryProps {
    id: number;
    count: number;
    name: string;
    slug: string;
}

interface ProductsFiltersProps {
    countries: CountryProps[];
    colors: string[];
    bottleSizes: string[];
    bottlesCases: string[];
}

const filterTitle = (title: string) => {
    return <h5 className="text-md mb-3">{title}</h5>
}

const ProductsFilters: React.FC<ProductsFiltersProps> = ({countries, colors, bottleSizes, bottlesCases}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlerFilterChange = (filterType: string, value: string) => {
        const params = new URLSearchParams( window.location.search );
        const existingValues = params.get( filterType )?.split( '_AND_' ) || [];

        if (existingValues.includes( value )) {
            // Remove the value if already selected
            const updatedValues = existingValues.filter( (v) => v !== value );
            if (updatedValues.length > 0) {
                params.set( filterType, updatedValues.join( '_AND_' ) )
            } else {
                params.delete( filterType );
            }
        } else {
            existingValues.push( value );
            params.set( filterType, existingValues.join( '_AND_' ) );
        }

        // Update URL with new filter params
        router.push( `${pathname}?${params.toString()}` );
    }

    const isSelected = (filterType: string, value: string) => {
        const params = searchParams.get( filterType )?.split( '_AND_' ) || [];
        return params.includes( value );
    }

    return (
        <div className="pr-16 space-y-8">
            {/* Filters Country */}
            {countries?.length > 0 && (
                <div className="relative">
                    {filterTitle( 'Filter By Country' )}
                    <ul className="list-none mt-3">
                        {countries.map( (country) => (
                            <li key={country.id}>
                                <Button variant="link" className="flex w-full justify-between px-0 py-1 h-9">
                                    <span>{country.name}</span>
                                    <span>{country.count}</span>
                                </Button>
                            </li>
                        ) )}
                    </ul>
                </div>
            )}

            {/* Filters Bottle Size */}
            {colors?.length > 0 && (
                <div className="relative border-t border-gray-200 pt-8">
                    {filterTitle( 'Filter By Color' )}
                    <ul className="list-none space-y-3">
                        {colors.map( (color: string, index: number) => (
                            <li key={`${color}${index}`} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`filterColor${color}`}
                                    name="color"
                                    value={color}
                                    checked={isSelected( 'filter_color', color )}
                                    onCheckedChange={() => handlerFilterChange( 'filter_color', color )}
                                />
                                <Label htmlFor={`filterColor${color}`}>{color}</Label>
                            </li>
                        ) )}
                    </ul>
                </div>
            )}

            {/* Filters Bottle Size */}
            {bottleSizes?.length > 0 && (
                <div className="relative border-t border-gray-200 pt-8">
                    {filterTitle( 'Filter By Bottle Size' )}
                    <ul className="list-none">
                        {bottleSizes.map( (size: string, index: number) => (
                            <li key={`${size}${index}`}>{size}</li>
                        ) )}
                    </ul>
                </div>
            )}

            {/* Filters Bottles per case */}
            {bottlesCases?.length > 0 && (
                <div className="relative border-t border-gray-200 pt-8">
                    {filterTitle( 'Filter By Bottles per case' )}
                    <ul className="list-none">
                        {bottlesCases.map( (perCase: string, index: number) => (
                            <li key={index}>{perCase}</li>
                        ) )}
                    </ul>
                </div>
            )}


            {/* Filters Brands */}
            <div className="relative border-t border-gray-200 pt-8">
                {filterTitle( 'Filter By Brands' )}
                <ul className="list-none">
                    <li></li>
                </ul>
            </div>

        </div>
    );
};


export default ProductsFilters;
