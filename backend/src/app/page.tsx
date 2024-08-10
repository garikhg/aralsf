"use client";

import React, {useEffect} from 'react';
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function Home() {
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/login');
        }
    }, [session, status, router]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (!session) {
        return null;
    }

    return (
        <div>
            Login Page
        </div>
    );
}

