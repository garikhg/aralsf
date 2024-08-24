import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Image } from 'lucide-react';

const ProductSkeleton = () => {
  return (
    <div className="relative rounded-md max-w-sm w-full space-y-2">
      <div className="relative">
        <Skeleton className="aspect-square w-full bg-slate-200 lg:h-[477px]" />
        <Image strokeWidth={2} className="text-slate-300 w-[100px] h-auto absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4" />
      </div>

      <Skeleton className="h-12 w-full bg-slate-200" />
      <Skeleton className="h-1 w-full bg-slate-200" />
      <div className="pt-2 space-y-2">
        <Skeleton className="h-4 w-full bg-slate-200" />
        <Skeleton className="h-3 w-full bg-slate-200" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
