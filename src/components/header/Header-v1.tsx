'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {BrandLogo, SearchForm} from '@/components';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import NavMenu from "@/components/nav-menu/NavMenu";

const Header: React.FC = () => {
    const controls = useAnimation();
    const [lastScrollY, setLastScrollY] = useState( 0 );
    const breakpointLg = 1024;

    useEffect( () => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (window.innerWidth >= breakpointLg) {
                if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    controls.set( {
                        y: '-100%',
                        opacity: 0
                    } );
                } else {
                    controls.set( {
                        y: 0,
                        opacity: 1
                    } );
                }

            } else {
                controls.set( {
                    y: 0,
                    opacity: 1
                } );
            }

            setLastScrollY( currentScrollY );
        };

        window.addEventListener( 'scroll', handleScroll );
        return () => {
            window.removeEventListener( 'scroll', handleScroll );
        };

    }, [lastScrollY, controls] );

    return (
        <AnimatePresence>
            <motion.header
                animate={controls}
                initial={{opacity: 1, y: 0}}
                exit={{opacity: 1, y: 0}}
                className="h-16 lg:h-20 flex items-center bg-primary sticky top-0 z-50 duration-200"
            >
                <div className="container flex justify-between items-center">
                    <div className="flex items-center mr-auto">
                        <Link href="/"><BrandLogo className="w-20 lg:h-24 h-auto"/></Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/*<NavigationMenu menuItems={menuItems} />*/}
                        {/*<NavigationBar/>*/}
                        <NavMenu location="primary" />
                        <SearchForm/>
                    </div>
                </div>
            </motion.header>
        </AnimatePresence>
    );
};

export default Header;
