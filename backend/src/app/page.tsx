"use client";

import React from 'react';
import {signOut, useSession} from "next-auth/react";

export default function Home() {
    const {data: session, status} = useSession();

    console.log(status)
    if (!session) {
        return <p>You are not logged in.</p>;
    }
    return (
       <div>
           Login Page
       </div>
    );
}

