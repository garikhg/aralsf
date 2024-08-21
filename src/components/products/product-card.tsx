import React from 'react';
import Image from 'next/image';

const ProductCard = ({ data }: { data: any }) => {
  const { sourceUrl } = data?.featuredImage?.node || '';
  const { sku, country, grapeType, manufacturer, brand, color, type, alcoholVolume } = data?.acfProductOptions || '';

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {sourceUrl && (
        <div className="bg-white">
          <Image
            src={sourceUrl}
            alt={data?.title || ''}
            width={720}
            height={1080}
            priority
            className="w-full max-w-full h-auto"
          />
        </div>
      )}

      <div className="py-4 bg-[#F2F2F2]">
        {data?.title && (
          <h3 className="scroll-m-20 min-h-16 text-md leading-6 text-center tracking-tight border-b border-black/10 pb-4 px-4">
            {data?.title}
          </h3>
        )}
        <div className="p-4 text-center text-sm leading-7">
          {sku && <p>SKU - {sku}</p>}
          {country && <p>Country - {country}</p>}
          {brand && <p>Brand - {brand}</p>}
          {alcoholVolume && <p>Alc. Vol. - {alcoholVolume}</p>}
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
