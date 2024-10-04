import React from 'react';
import Link from 'next/link';
import {BrandLogo, SearchForm} from '@/components';
import NavMenu from "@/components/NavMenu";

const Header: React.FC = () => {

    return (
        <header className="h-16 lg:h-20 flex items-center bg-primary sticky top-0 z-50 duration-200">
            <div className="container flex justify-between items-center">
                <div className="flex items-center mr-auto">
                    <Link href="/"><BrandLogo className="w-20 lg:h-24 h-auto"/></Link>
                </div>
                <div className="flex items-center space-x-4">
                    <NavMenu location="primary"/>
                    <SearchForm/>
                </div>
            </div>
        </header>
    );
};

export default Header;
