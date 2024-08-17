import { NextRequest, NextResponse } from 'next/server';
import prisma from '@lib/prisma';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { title, content, authorId } = await req.json(); // Parsing the JSON body

    const newPost = await prisma.post.create( {
      data: { title, content, authorId, published: false }
    } );

    return NextResponse.json( newPost, { status: 201 } );
  } catch (error) {
    return NextResponse.json( { error: 'Failed to create post' }, { status: 500 } );
  }
}
