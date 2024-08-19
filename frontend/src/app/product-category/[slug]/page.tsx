import React from 'react';

import { PageHeader } from '@/components/page-header';
import ProductsFilters from '@/components/products/products-filters';
import ProductCard from '@/components/products/product-card';

const products = [
  {
    id: 1,
    title: 'Alazani Valley Red Semi-Sweet Wine',
    sku: 'DSC3948',
    alco: '4.5%',
    vol: '750ml',
    imageSrc: '/images/demo/products/alazani-valley-r-DSC3948.jpg'
  },
  {
    id: 2,
    title: 'Khvantchkara Red Semi-Sweet Wine',
    sku: 'DSC3944',
    alco: '4.5%',
    vol: '750ml',
    imageSrc: '/images/demo/products/khvantchkara-DSC3944.jpg'
  },
  {
    id: 3,
    title: 'Kindzmarauli Red Semi-Sweet Wine',
    sku: 'DSC3944',
    alco: '4.5%',
    vol: '750ml',
    imageSrc: '/images/demo/products/kindzmarauli-DSC3950.jpg'
  }
];

export default async function SingleCategory() {

  return (
    <div>
      <PageHeader
        title="Beer"
      />

      <main className="py-24" role="main">
        <div className="container grid grid-cols-4 gap-x-16">
          <Filters />

          <div className="col-span-3">
            <div className="flex justify-between items-center border-b border-black pb-4 mb-6">
              <div>
                <p>Showing all 12 results</p>
              </div>
              <div></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {products && products.map( (product) => (
                <ProductCard
                  key={product?.id}
                  {...product}
                />
              ) )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

const Filters = () => {
  return (
    <aside className="">
      <ProductsFilters />
    </aside>
  );
};
