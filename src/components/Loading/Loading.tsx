import React, {useEffect, useState} from 'react';
import {cn} from '@/lib/utils';
import './Loading.scss';

interface LoadingProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
    label?: string;
}

const Loading: React.FC<LoadingProps> = (
    {
        width = 105,
        height = 38,
        color = '#fff',
        className = '',
        label = 'Animated Logo',
    }
) => {
    const [isLoading, setIsLoading] = useState( true );

    useEffect( () => {
        const timer = setTimeout( () => {
            setIsLoading( false );
        }, 18000 );

        return () => clearTimeout( timer );
    }, [] );

    if (!isLoading) return null;

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                fill="none"
                viewBox="0 0 105 38"
                className={cn( 'logo-animation w-44 h-auto', className )}
                aria-label={label}
            >
                <path
                    className="logo-path"
                    d="M24.463 37.5L15.284 5.43C14.406 2.368 12.605.5 10.673.5H6.72v.26c2.152 0 3.206 2.075 2.591 4.514L0 37.5h.878l5.27-18.267h7.643L19.06 37.5h5.402zM6.456 18.196L9.97 6l3.513 12.195H6.456zM51.848 37.5h3.294L43.679 22.658l-.044-.052c3.47-1.66 5.929-5.604 5.929-10.326 0-6.072-4.172-11.054-9.355-11.054H24.88v.26c2.196 0 3.953 2.076 3.953 4.618V37.5h4.743V23.385h4.7l9.047 11.728c1.186 1.505 2.81 2.387 4.524 2.387zM33.577 22.295V2.265h5.402c3.25 0 5.93 4.514 5.93 10.015 0 3.529-1.099 6.642-2.724 8.406-.57.623-1.186 1.09-1.844 1.35-.264.104-.527.207-.79.207-.177.052-.352.052-.572.052h-5.402zM80.822 37.5l-9.18-32.07C70.765 2.368 68.965.5 67.032.5h-3.953v.26c2.152 0 3.206 2.075 2.591 4.514L56.36 37.5h.878l5.27-18.267h7.642L75.42 37.5h5.403zM62.815 18.196L66.328 6l3.514 12.195h-7.027zM85.148 6.104v9.964h4.743V1.226h-8.696v.208c2.196 0 3.953 2.128 3.953 4.67zm0 31.396H105v-1.038H89.891V22.814c0-3.113-2.108-5.656-4.743-5.656V37.5z"
                    fill={color}
                ></path>
            </svg>
            <div className="block text-primary-foreground text-center mb-8">
                <p>Please wait<span>...</span></p>
            </div>
            <div className="hidden animate-spin rounded-full h-6 w-6 border-t-2 border-gray-50"></div>

        </div>
    );
};

export default Loading;
