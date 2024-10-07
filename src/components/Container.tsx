import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="container py-10 md:py-16 xl:py-24">
            {children}
        </div>
    );
};

Container.displayName = 'Container';

export {Container};
