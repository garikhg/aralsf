import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface CategoryCardProps {
  name?: string;
  image?: string;
  description?: string;
  href?: string;
  imageHeight?: number;
  imageWidth?: number;
}


const CategoryCard: React.FC<CategoryCardProps> = (
  {
    name = '',
    image = '',
    description = '',
    href = '#',
    imageWidth = 436,
    imageHeight = 470
  }
) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {image &&
        <div className="relative z-0">
          <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/60 to-black/10 z-[5]"></span>
          <Image
            src={image}
            alt={name}
            height={imageHeight}
            width={imageWidth}
            priority
            className="max-w-full z-0"
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
