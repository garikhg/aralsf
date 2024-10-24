'use client';import React from 'react';import Image from 'next/image';/* Swiper */import { Autoplay, Pagination } from 'swiper/modules';import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';import 'swiper/css/pagination';const partners = [  {    id: 1,    name: 'Bacardi',    logo: {      src: '/images/demo/partner-1.png',      alt: 'Bacardi'    }  },  {    id: 2,    name: 'Smirnoff',    logo: {      src: '/images/demo/partner-2.png',      alt: 'Smirnoff'    }  },  {    id: 3,    name: 'Fireball',    logo: {      src: '/images/demo/partner-3.png',      alt: 'Fireball'    }  },  {    id: 4,    name: 'The Patron',    logo: {      src: '/images/demo/partner-4.png',      alt: 'The Patron'    }  },  {    id: 5,    name: 'Amstel',    logo: {      src: '/images/demo/partner-5.png',      alt: 'Amstel'    }  },  {    id: 6,    name: 'Anheuser Busch',    logo: {      src: '/images/demo/partner-6.png',      alt: 'Anheuser Busch'    }  },  {    id: 7,    name: 'Bavaria',    logo: {      src: '/images/demo/partner-7.png',      alt: 'Bavaria'    }  }];const PartnersCarousel = () => {  return (    <section className="bg-white pt-16 pb-6">      <div className="container">        <div className="text-center mb-16">          <h2            className="w-fit scroll-m-20 pb-2 text-4xl font-bold mx-auto after:block after:w-3/5 after:mx-auto after:mt-2 after:border-b after:border-1 after:border-black">            Our Partners          </h2>        </div>        <Swiper          style={{            paddingBottom: '40px'          }}          spaceBetween={50}          slidesPerView={4}          speed={1500}          autoplay={{            delay: 2500,            disableOnInteraction: false          }}          pagination={{ clickable: true }}          modules={[Pagination, Autoplay]}        >          {partners.length > 0 && partners.map( (partner) => (            <SwiperSlide key={partner.id}>              <div className="text-center flex items-center justify-between bg-light-gray rounded border border-gray-200 p-6">                <Image                  src={partner?.logo?.src}                  alt={partner.logo?.alt}                  width={140}                  height={140}                  priority                  className="block max-w-full mx-auto"                />                <span className="sr-only">{partner?.name}</span>              </div>            </SwiperSlide>          ) )}        </Swiper>      </div>    </section>  );};PartnersCarousel.displayName = 'PartnersCarousel';export { PartnersCarousel };