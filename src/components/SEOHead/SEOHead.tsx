import React from 'react';

interface SeoHeadProps {
  title?: string;
  description?: string;
}

const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  return (
    <>
      {title && (
        <title>{title}</title>
      )}

      {description && (
        <meta name="description" content={description} />
      )}
    </>
  );
};

export default SeoHead;
