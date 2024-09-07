import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ProductsLoading = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="bg-gray-200 min-h-[508px]"></div>
      <main className="py-16 lg:py-24" role="main">
        <div className="container grid grid-cols-1 xl:grid-cols-4 gap-x-16">
          <aside className="hidden xl:block col-span-1">
            <div>
              <Skeleton className="h-6 w-30 rounded-full bg-gray-200" />
              {[...Array(6)].map( (_,index: number) => (
                <div key={index} className="flex gap-2">
                  <Skeleton className="h-8 w-8 rounded-full bg-gray-200" />
                  <Skeleton className="h-8 w-30 rounded-full bg-gray-200" />
                </div>
              ) )}
            </div>

            <div>
              <h5>Filter By Color</h5>
            </div>
          </aside>

          <div className="col-span-3">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">

              { [...Array( 6 )].map( (_, index) => (
                <div key={index}>
                  Product Loading Skeleton....
                </div>
              ) )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsLoading;
