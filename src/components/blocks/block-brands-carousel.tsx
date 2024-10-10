'use client';

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Heading4 } from '@/components/ui/heading';
import Image from 'next/image';

interface BlockDataProps {
  blockData: any[];
}

const BlockBrandsCarousel: React.FC<BlockDataProps> = ({ blockData }) => {
  return (
    <section className="block-brand-carousel bg-white py-16 lg:py-24">
      <div className="container">
        <Heading4 className="text-center mb-8">Our Partners</Heading4>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          speed={1500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          style={{
            paddingBottom: '40px'
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }}
        >
          {blockData.length > 0 && blockData.map( (brand) => {
            const brandLogoSRC = brand?.acf?.brand_logo?.sizes?.thumbnail || '';
            if (!brandLogoSRC) return false;

            const brandName = brand?.name;
            const brandLogoALT = brand?.acf?.brand_logo?.alt ?? brandName;
            const brandLogoHeight = brand?.acf?.brand_logo?.sizes['thumbnail-height'] || 150;
            const brandLogoWidth = brand?.acf?.brand_logo?.sizes['thumbnail-width'] || 150;

            return (
              <SwiperSlide key={brand.id}>
                <div className="bg-gray-100 flex justify-center items-center rounded-xl py-6 px-8">
                  <Image
                    priority
                    src={brandLogoSRC}
                    alt={brandLogoALT}
                    height={brandLogoHeight}
                    width={brandLogoWidth}
                    className="block max-w-full w-32 h-32 object-cover border-none"
                  />
                  <span className="sr-only">{brand?.name}</span>
                </div>
              </SwiperSlide>
            );
          } )}
        </Swiper>
      </div>
    </section>
  );
};

export default BlockBrandsCarousel;
