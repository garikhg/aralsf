import { NextApiRequest, NextApiResponse } from 'next';
// import { getToken } from '@auth/core/jwt';
// import { getSession } from 'next-auth/react';
import prisma from '@lib/prisma';

interface PostDataProps {
  title: string;
  slug: string;
  content: string;
  authorId: number;
}

export async function handle(req: NextApiRequest, res: NextApiResponse) {

  // Only allow POST requests, reject all other methods
  if (req.method !== 'POST') {
    res.setHeader( 'Allow', ['POST'] );
    return res.status( 405 ).end( `Method ${req.method} Not Allowed` );
  }

  // Token Protection
  // const token = getToken( { req } );

  // Session Protection
  // const session = await getSession({ req });

  // Verify session exists
  // if (!token) {
  //   return res.status( 401 ).json( { error: 'You must be logged in to create posts.' } );
  // }

  try {
    const { title, slug, content, authorId } = req.body as PostDataProps;

    // Validate the incoming data
    if (!title || !slug || !content || !authorId) {
      return res.status( 400 ).json( { error: 'Missing required fields' } );
    }

    // Create a new post
    const newPost = await prisma.post.create( {
      data: { title, slug, content, authorId, published: false }
    } );

    // Send the newly created post back with a 201 status code
    res.status( 200 ).json( newPost );

  } catch (error: any) {
    console.error( 'Error creating post:', error );
    res.status( 500 ).json( { error: 'Failed to create post', details: error.message } );
  }
}


// import { NextApiRequest, NextApiResponse } from 'next';
// function convertToFetchRequest(nextReq: NextApiRequest): Request {
//   const { method, url, headers } = nextReq;
//   const host = headers.host;
//
//   return new Request(`http://${host}${url}`, {
//     method: method,
//     headers: new Headers(headers),
//     body: nextReq.body as any,  // Adjust based on actual content type
//   });
// }
//
// export default async function handle(req: NextApiRequest, res: NextApiResponse) {
//   const fetchReq = convertToFetchRequest(req);
//   // Now you can use `fetchReq` with your library or function that requires a Fetch API `Request`
// }
