import { NextRequest, NextResponse } from 'next/server';
import prisma from '@lib/prisma';

interface PostDataProps {
  title: string;
  slug: string;
  content: string;
  authorId: number;
}

export async function POST(req: NextRequest) {
  try {
    const { title, slug, content, authorId } = await req.json() as PostDataProps; // Parsing the JSON body

    const newPost = await prisma.post.create( {
      data: { title, slug, content, authorId, published: false }
    } );

    return NextResponse.json( newPost );
  } catch (error) {
    return NextResponse.json( { error: 'Failed to create post' }, { status: 500 } );
  }
}
