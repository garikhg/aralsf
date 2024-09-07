import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div>
      <Skeleton className="min-h-[452px] bg-gray-200"></Skeleton>
      <main role="main">
        <div className="container py-8 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map( (_, index: number) => (
              <Skeleton className="min-h-[434px] bg-gray-200" key={index} />
            ) )}
          </div>
        </div>
        <div>Brands Carousel</div>
      </main>
    </div>
  );
};

export default Loading;
