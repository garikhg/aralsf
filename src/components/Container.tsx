import React from 'react';
import {cn} from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({children, className}) => {
    return (
        <div className={cn(
            'container py-10 md:py-16',
            className
        )}>
            {children}
        </div>
    );
};

Container.displayName = 'Container';

export {Container};
