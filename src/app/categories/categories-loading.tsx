import React from 'react';
import CategoryGrid from "@/components/categories/category-grid";
import {Skeleton} from "@/components/ui/skeleton";

const CategoriesLoading = () => {
    return (
        <div className="container py-8 xl:py-16 xl:pt-6 min-h-screen">
            <Skeleton className="bg-gray-200 h-[360px] lg:h-[480px] rounded-lg overflow-hidden mb-8"/>

            <div className="h-5 lex justify-start items-center mb-8 xl:mb-10">
                <Skeleton className="h-3 w-36 bg-gray-200 rounded-full"/>
            </div>

            <CategoryGrid>
                {Array( 9 ).fill( 0 ).map( (_, index: number) => (
                    <Skeleton key={index} className="h-[468px] flex flex-col bg-gray-100 rounded-lg">
                        <div className="mt-auto p-8">
                            <Skeleton className="w-36 h-5 bg-gray-200 rounded-full mb-6"/>
                            <Skeleton className="w-4/5 h-4 bg-gray-200 rounded-full mb-8"/>
                            <Skeleton className="w-32 h-3 bg-gray-200 rounded-full"/>
                        </div>
                    </Skeleton>
                ) )}
            </CategoryGrid>
        </div>
    );
};

export default CategoriesLoading;
