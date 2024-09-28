import React from 'react';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

interface ProductsNoContentProps {
  data?: any;
}

const ProductsNoContent: React.FC<ProductsNoContentProps> = ({ data }) => {
  const { goBackButtonText, goBackButtonLink } = data?.acfGlobalSettings?.acfGlobalOptions?.acfGoBackButton || '';
  const description = data?.acfGlobalSettings?.acfGlobalOptions?.acfPageNotContent || '';

  if (!goBackButtonText || !goBackButtonLink) return null;

  return (
    <div className="container text-center flex flex-col justify-center max-w-screen-md min-h-[400px]">
      <div>
        <p className="font-light text-lg text-gray-500">
          {description}
        </p>
        <div className="mt-6 text-center flex flex-col">
          <Link href={goBackButtonLink} className="w-auto flex items-center gap-1 px-4 py-2 mx-auto group">
            <span className="group-hover:-translate-x-1 transition-all duration-150"><MoveLeft className="w-4 h-4" /></span>
            {goBackButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};


export default ProductsNoContent;
