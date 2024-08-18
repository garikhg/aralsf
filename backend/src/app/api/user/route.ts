import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    return res.status( 200 ).json( users );
  }
}
