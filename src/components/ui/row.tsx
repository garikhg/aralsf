import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const rowColsVariants = cva(
  'flex',
  {
    cols: {
      col: {
        1: 'w-full'
      }
    }
  }
);

// interface RowProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof rowColsVariants> {
//   asChildren?: boolean;
// }

const Row = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>( ({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn( rowColsVariants( { col, className } ) )}
      {...props}
    />
  );
} );
Row.displayName = 'Row';

export { Row, rowColsVariants };
