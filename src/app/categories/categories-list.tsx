import React from 'react';
import {CategoryCard} from "@/components/categories/category-card";

const CategoriesList = ({data}: { data?: any }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data && data.map( (category: any) => (
                <div key={category.slug} className="relative">
                    <CategoryCard data={category}/>
                </div>
            ) )}
        </div>
    );
};

export default CategoriesList;
