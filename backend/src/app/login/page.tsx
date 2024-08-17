import React, from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { Button, Input, Label } from '@components/ui';
import { signIn } from '@lib/auth';

const LoginPage = () => {
  // const [formData, setFormData] = useState({});
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //
  //   const formData = new FormData( e.currentTarget );
  //   const data = Object.fromEntries( formData.entries() ) as FormData;
  //
  //   // await signIn( 'credentials', {
  //   //   email: formData.email,
  //   //   password: formData.password,
  //   //   redirect: false
  //   // } );
  //
  //   await signIn( 'credentials', {
  //     email: formData.get( 'email' ),
  //     password: formData.get( 'password' ),
  //     redirect: false,
  //     callbackUrl: '/'
  //   } );
  //
  //   console.log( result );
  // };

  return (
    <div className="min-h-screen flex justify-center items-center md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription className="text-sm">Please enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={async (formData) => {
            'use server';
            await signIn( 'credentials',
              formData
            );
          }}>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                className="py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </Button>
              <a
                className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
