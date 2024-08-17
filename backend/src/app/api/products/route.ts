import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany( {
      where: { published: true },
    } );
    return NextResponse.json( products );
  } catch (erorr) {
    return NextResponse.json( { error: 'Failed to fetch products' }, { status: 500 } );
  }
}
