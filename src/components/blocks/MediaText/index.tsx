import React from 'react';
import Link from 'next/link';

const BlockMediaText = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">

      <div className="hidden lg:block container relative z-30">
        <div className="flex flex-wrap -mx-4 lg:-mx-12">
          <div className="w-full lg:w-1/2 px-4 lg:px-12">

            <div className="py-24 md:py-48">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Elevate Your Selection with Our Premium Beers
              </h2>
              <div className="space-y-4 text-lg font-light leading-7">
                <p>
                  Explore our extensive selection of beers, from crisp lagers
                  and hoppy IPAs to rich stouts and refreshing ales.
                </p>
              </div>
              <div className="mt-4 md:mt-6 sm:mt-8">
                <Link
                  href="/product-category/beer"
                  className="text-md text-primary-foreground hover:underline p-0"
                >
                  Browse Our Beers
                </Link>
              </div>
            </div>

          </div>
          <div className="w-full lg:w-1/2">

            <figure className="hidden w-full h-full">
              <img src="/images/demo/home-beers-1.jpg" alt="beer" className="block w-full h-full object-cover max-w-full" />
            </figure>

          </div>
        </div>
      </div>

      <div className="relative w-full sm:w-4/5 lg:w-1/2 lg:absolute top-0 right-0 bottom-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <span className="lg:hidden bg-gradient-to-tr from-black/80 to-transparent w-full h-full absolute top-0 left-0"></span>
          <figure className="w-full h-full">
            <img src="/images/demo/home-beers-1.jpg" alt="beer" className="block w-full h-full object-cover max-w-full" />
          </figure>
        </div>

        <div className="relative w-full bottom-0 left-0 lg:hidden z-20">
          <div className="container">
            <div className="w:full sm:w-3/5 py-10 pt-60 sm:pt-80">
              <h2 className="text-3xl font-semibold mb-3">
                Elevate Your Selection with Our Premium Beers
              </h2>
              <div className="text-lg font-light leading-7">
                <p>
                  Explore our extensive selection of beers, from crisp lagers
                  and hoppy IPAs to rich stouts and refreshing ales.
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="/product-category/beer"
                  className="text-md text-primary-foreground hover:underline p-0"
                >
                  Browse Our Beers
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

BlockMediaText.displayName = 'BlockMediaText';

export { BlockMediaText };
