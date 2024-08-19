'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );
  // const { data: session, status } = useSession();

  // console.log( session );

  const handleSubmit = async () => {
    try {
      const result = await signIn( 'credentials', {
        redirect: false,
        email,
        password
      } );

      if (result?.error) {
        // Handle error
      } else {
        // Handle success
      }
    } catch (error) {
      console.error( 'Failed to sign in:', error );
    }
  };

  return (
    <div>
      <button onClick={() => signOut()}>
        Sign Out
      </button>
      <button onClick={() => signIn()}>Sign in</button>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </div>
  );
};
export default SignIn;
