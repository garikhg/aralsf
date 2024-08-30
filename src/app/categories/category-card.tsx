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
        <div className="relative z-0">
          <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/60 to-black/10 z-[5]"></span>
          <Image
            src={sourceUrl ?? ''}
            alt={!altText ? name : altText}
            height={436}
            width={470}
            priority
            className="w-full h-full blank object-cover max-w-full z-0"
          />
        </div>
      }
      <div className="absolute p-8 top-auto right-0 bottom-0 left-0 text-primary-foreground sm:p-9">
        {name && <h3 className="block scroll-m-20 text-2xl font-semibold tracking-tight mb-3">{name}</h3>}
        {description && <div className="min-h-20 pb-6"><p className="leading-6">{description}</p></div>}
        {href && <Link href={href}>See all products</Link>}
      </div>
    </div>
  );
};

CategoryCard.displayName = 'CategoryCard';

export { CategoryCard };
