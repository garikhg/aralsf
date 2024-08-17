import React from 'react';
import type { Metadata } from 'next';
import { PageHeader, PartnersCarousel } from '@/_components';


export const metadata: Metadata = {
  title: 'Categories',
  description: ''
};

const Categories: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Categories"
        description=""
      />
      <main role="main">
        <section className="pt-16 bg-white">
          <div className="container">
            <div className="text-center">
              <h2
                className="w-fit scroll-m-20 pb-2 text-4xl font-bold mx-auto after:block after:w-3/5 after:mx-auto after:mt-2 after:border-b after:border-1 after:border-black">
                Our Partners
              </h2>
            </div>
          </div>
          <PartnersCarousel />
        </section>
      </main>
    </div>
  );
};

export default Categories;
