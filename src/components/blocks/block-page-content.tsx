'use client';

import React from 'react';

interface PageContentProps {
  pageData?: any;
}

const BlockPageContent: React.FC<PageContentProps> = ({ pageData }) => {
  const content = pageData?.content?.rendered || '';

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default BlockPageContent;
