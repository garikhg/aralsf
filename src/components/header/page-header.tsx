import React from 'react';
import Image from 'next/image';
import { Heading1 } from '@/components/ui/heading';

const PageHeader = ({ data }: { data?: any }) => {
  const title = data?.title?.rendered || '';
  const featuredMedia = data?._embedded?.['wp:featuredmedia'][0] || '';
  const srcUrl = featuredMedia?.source_url || '';
  const altText = featuredMedia?.alt_text || '';
  const hasFeaturedMedia = srcUrl ? true : false as boolean;

  return (
    <header className="relative page-header">
      {hasFeaturedMedia && (
        <Image
          priority
          src={srcUrl}
          alt={altText}
          width={featuredMedia?.media_details?.width || 1728}
          height={featuredMedia?.media_details?.height || 440}
          className="block w-full min-h-[22.5rem] h-full max-w-full border-none outline-none object-cover"
        />
      )}

      <div className="h-full flex items-center text-center absolute top-0 left-0 right-0">
        <div className="container">
          <Heading1 className="text-primary-foreground">{title}</Heading1>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
