import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CategoryCardProps {
  props?: any;
  data?: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data, ...props }) => {
  const { name, description, uri: href } = data ?? '';
  const { sourceUrl, altText } = data?.acfProductCategoriesOptions?.acfThumbnail?.node ?? '';

  return (
    <div className="relative overflow-hidden rounded-lg">
      {sourceUrl &&
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/80 to-black/10 z-[5]"></span>
          <img
            src={sourceUrl ?? ''}
            alt={!altText ? name : altText}
            className="w-full h-full blank object-cover max-w-full z-0"
          />
        </div>
      }
      <div className="relative p-8 text-primary-foreground lg:mt-40 xl:mt-50">
        {name && <h3 className="block scroll-m-20 text-2xl font-semibold tracking-tight mb-3">{name}</h3>}
        {description && <div className="min-h-20 pb-6"><p className="leading-6">{description}</p></div>}
        {href && <Link href={href}>See all products</Link>}
      </div>
    </div>
  );
};

CategoryCard.displayName = 'CategoryCard';

export { CategoryCard };
