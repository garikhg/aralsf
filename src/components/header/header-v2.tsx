'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {BrandLogo, SearchForm} from '@/components';
import NavMenu from "@/components/nav-menu/NavMenu";
import {useScroll} from "framer-motion";
import {cn} from "@/lib/utils";

const Header: React.FC = () => {
    const {scrollY} = useScroll();
    const [isHeroVisible, setIsHeroVisible] = useState( true );
    const [headerClass, setHeaderClass] = useState( 'fixed' );
    const heroRef = useRef<HTMLDivElement>( null );

    // Check when the user scrolls past the hero image
    useEffect( () => {
        const updateHeroBackground = () => {
            const heroElement = document.querySelector( '[data-hero-section]' ) || '';

            // If a hero section doesn't exist, set visibility to false
            if (!heroElement) {
                setIsHeroVisible( false );
                setHeaderClass( 'sticky' );
                return;
            }

            setIsHeroVisible( true );
            const heroBottom = heroElement.getBoundingClientRect().bottom;

            if (heroBottom <= 90) {
                setIsHeroVisible( false );
            } else {
                setIsHeroVisible( true );
            }
        }

        updateHeroBackground();
        return scrollY.on( 'change', () => updateHeroBackground() );
    }, [scrollY] );

    return (
        <header className={cn(
            `w-full h-16 md:h-20 flex items-center top-0 z-50 transition-all duration-200`,
            isHeroVisible ? 'bg-transparent' : 'bg-primary', headerClass
        )}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center mr-auto">
                    <Link href="/"><BrandLogo className="w-20 lg:h-20 h-auto"/></Link>
                </div>
                <div className="flex items-center space-x-4">
                    {/*<NavMenu location="primary"/>*/}
                    <SearchForm/>
                </div>
            </div>
        </header>
    );
};

export default Header;
