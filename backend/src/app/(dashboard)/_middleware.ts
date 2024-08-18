import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // @ts-ignore
  const token = await getToken( { req, secret: process.env.AUTH_SECRET } );
  if (!token) {
    return NextResponse.redirect( new URL( '/auth/signin', req.url ) );
  }

  return NextResponse.next();
}
