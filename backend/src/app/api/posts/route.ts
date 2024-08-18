import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.post.findMany( {
      where: { published: true },
      orderBy: { createdAt: 'desc' }
    } );
    return NextResponse.json( posts, {status: 200} );
  } catch (erorr) {
    return NextResponse.json( { error: 'Failed to fetch posts' }, { status: 500 } );
  }
}

