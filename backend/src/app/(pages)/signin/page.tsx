// app/signin/page.tsximport React from 'react';import { getCsrfToken } from 'next-auth/react';export default async function SignIn() {    const csrfToken = await getCsrfToken();    console.log(csrfToken);    return (        <div>            <h1>Credentials Sign in</h1>            <form method="post" action="/api/auth/callback/credentials">                <input name="csrfToken" type="hidden" defaultValue={csrfToken || ''} />                {/* Add your form fields here */}                <button type="submit">Sign in</button>            </form>        </div>    );}