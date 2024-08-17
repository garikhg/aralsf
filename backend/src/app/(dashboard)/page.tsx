import React from 'react';
import prisma from '@lib/prisma';

export default async function Dashboard() {
  const posts = await prisma.post.findMany( {
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  } );

  return (
    <div>
      Admin Dashboard Page
    </div>
  );
};
