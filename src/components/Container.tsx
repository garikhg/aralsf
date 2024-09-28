import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="container py-6 sm:py-8 lg:py-12">
            {children}
        </div>
    );
};

Container.displayName = 'Container';

export {Container};
