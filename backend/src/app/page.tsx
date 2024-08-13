"use client";


import {signIn, useSession} from "next-auth/react";
import {ReactHTMLElement} from "react";

export default function Home() {
    const {data: session} = useSession();

    console.log( session )
    console.log( session?.user?.email )
    return (
        <div>
            <form action={async (formData: ReactHTMLElement<any>) => {
                await signIn( "credentials", {
                    formData,
                    redirect: false
                } )
            }}
            >
                <label>
                    Email
                    <input name="email" type="email"/>
                </label>
                <label>
                    Password
                    <input name="password" type="password"/>
                </label>
                <button onClick={() => signIn()}>Sign In</button>
            </form>
        </div>
    );
}

