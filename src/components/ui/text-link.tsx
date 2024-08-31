import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

interface TextLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = (
  {
    href,
    children,
    className,
  }
) => {
  return (
    <NextLink
      href={href}
      className={cn(
        'inline-block uppercase transition-all duration-200 p-0',
        'after:block clear-both after:h-0.5 after:rounded after:w-3/4',
        'hover:after:w-full after:transition-all',
        className
      )}
      passHref
    >
      {children}
    </NextLink>
  );
};

TextLink.displayName = 'TextLink';

export { TextLink };
