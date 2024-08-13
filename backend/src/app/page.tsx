"use client";


import {signIn, useSession} from "next-auth/react";
import {ReactHTMLElement} from "react";

export default function Home() {
    const {data: session, status, update} = useSession();

    console.log(session)
    return (
        <div>
            <form action={async (formData: ReactHTMLElement<any>) => {
                await signIn( "credentials", {formData} )
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

