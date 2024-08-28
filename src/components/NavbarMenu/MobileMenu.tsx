import React from 'react';
import { cn } from '@/lib/utils';

interface MenuToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
}

const MenuToggle: React.FC<MenuToggleProps> = ({ className = '', ...props }) => {
  return (
    <button
      className={cn( 'lg:hidden relative flex items-center', className )}
      aria-label="Toggle navigation"
      {...props}
    >
      <span className="relative inline-block w-10 h-6">
        <span className="block rounded absolute top-2/4 -mt-px h-0.5 w-10 bg-white text-white">
          <span className="inline-block rounded w-10 h-0.5 bg-white absolute -top-2.5 left-0"></span>
          <span className="inline-block rounded w-8 h-0.5 bg-white absolute -bottom-2.5 left-0"></span>
        </span>
      </span>
      <span className="sr-only">Menu</span>
    </button>
  );
};

MenuToggle.displayName = 'MenuToggle';

export { MenuToggle };
