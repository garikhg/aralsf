import { NextRequest, NextResponse } from 'next/server';
import prisma from '@lib/prisma';

interface PostDataProps {
  title: string;
  slug: string;
  content: string;
  authorId: number;
}

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


export async function POST(req: NextRequest) {
  try {
    const { title, slug, content, authorId } = await req.json() as PostDataProps; // Parsing the JSON body

    const newPost = await prisma.post.create( {
      data: { title, slug, content, authorId, published: false }
    } );

    return NextResponse.json( newPost, { status: 200 } );
  } catch (error) {
    return NextResponse.json( { error: 'Failed to create post' }, { status: 500 } );
  }
}
