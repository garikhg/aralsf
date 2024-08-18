import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title?: string;
  sku?: string;
  alco?: string;
  vol?: string;
  perCase?: string;
  imageSrc?: string;
}

const ProductCard: React.FC<ProductCardProps> = (
  {
    title,
    sku,
    alco,
    vol,
    perCase,
    imageSrc,
  }
) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="bg-white">
        <Image
          src={imageSrc ?? ''}
          alt={title ?? ''}
          width={720}
          height={1080}
          priority
          className="w-full max-w-full h-auto"
        />
      </div>
      <div className="py-4 bg-[#F2F2F2]">
        {title && (
          <h3 className="scroll-m-20 text-lg text-center font-semibold tracking-tight border-b border-black/10 pb-4 px-4">
            {title}
          </h3>
        )}
        <div className="p-4 text-center">
          {sku && <p>SKU - {sku}</p>}
          {alco && <p>Alcohol Contain - {alco}</p>}
          {vol && <p>Bottle Size - {vol}</p>}
          {perCase && <p>Bottles per case - {perCase}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
