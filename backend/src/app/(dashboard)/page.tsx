import React from 'react';
import prisma from '@lib/prisma';

export default function Dashboard() {
  // const posts = await prisma.post.findMany( {
  //   where: { published: true },
  //   orderBy: { createdAt: 'desc' }
  // } );
  //
  // console.log(posts)

  return (
    <div>
      Admin Dashboard Page
    </div>
  );
};
