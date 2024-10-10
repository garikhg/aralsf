'use client';

import React from 'react';

interface PageContentProps {
  pageData?: any;
}

const PageContent: React.FC<PageContentProps> = ({ pageData }) => {
  const content = pageData?.content?.rendered || '';

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PageContent;
