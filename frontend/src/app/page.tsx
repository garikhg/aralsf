import React from 'react';
import { Cover, HeroSlider, PartnersCarousel } from '@/_components';
import { BlockMediaText } from '@/components/blocks/MediaText';



export default function Home() {
  return (
    <main role="main">
      <HeroSlider />
      <Cover />
      <BlockMediaText />
      <PartnersCarousel />
    </main>
  );
}
