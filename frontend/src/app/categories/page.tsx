import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/_components';
import { CategoryCard } from '@/app/categories/category-card';
import { BrandPartnersCarousel } from '@/components/BrandPartners/BrandPartnersCarousel';


export const metadata: Metadata = {
  title: 'Categories',
  description: ''
};

const categories = [
  {
    id: '1',
    name: 'Beer’s',
    description: 'Explore our extensive selection of beers, from crisp lagers and hoppy IPAs to rich stouts and refreshing ales.',
    image: '/images/demo/categories/beer.jpg',
    path: '/product-category/beer'
  },
  {
    id: '2',
    name: 'Wine’s',
    description: 'Discover our curated collection of wines, featuring elegant reds, crisp whites, and sparkling delights.',
    image: '/images/demo/categories/wine.jpg',
    path: '/product-category/wine'
  },
  {
    id: '3',
    name: 'Vodka',
    description: 'Explore our selection of premium vodkas, known for their smoothness and clarity.',
    image: '/images/demo/categories/vodkas.jpg',
    path: '/product-category/vodka'
  },
  {
    id: '4',
    name: 'Whiskey',
    description: 'Explore our diverse range of whiskeys, from smooth bourbons to rich single malts.',
    image: '/images/demo/categories/whiskey.jpg',
    path: '/product-category/whiskey'
  },
  {
    id: '5',
    name: 'Brandy',
    description: 'Savor our selection of fine brandies, known for their rich, complex flavors and smooth finish.',
    image: '/images/demo/categories/brandy.jpg',
    path: '/product-category/brandy'
  },
  {
    id: '6',
    name: 'Tequila',
    description: 'Savor our selection of fine brandies, known for their rich, complex flavors and smooth finish.',
    image: '/images/demo/categories/tequila.jpg',
    path: '/product-category/tequila'
  },
  {
    id: '7',
    name: 'Liquor',
    description: 'Browse our extensive assortment of liquors, featuring everything from classic spirits to innovative blends.',
    image: '/images/demo/categories/beer.jpg',
    path: '/product-category/liquor'
  },
  {
    id: '8',
    name: 'Gin',
    description: 'Explore our collection of gins, from crisp and aromatic to bold and botanical.',
    image: '/images/demo/categories/gin.jpg',
    path: '/product-category/gin'
  },
  {
    id: '9',
    name: 'Rum',
    description: 'Enjoy our diverse range of rums, from smooth light varieties to rich, aged options.',
    image: '/images/demo/categories/rum.jpg',
    path: '/product-category/rum'
  }
];

const Categories: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Categories"
        description=""
      />
      <main role="main">
        <div className="container py-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories && categories.map( (category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category?.image}
                description={category.description}
                href={category.path}
              />
            ) )}
          </div>
        </div>

        <BrandPartnersCarousel />
      </main>
    </div>
  );
};

export default Categories;
