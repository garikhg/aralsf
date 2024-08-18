import React from 'react';
import prisma from '@lib/prisma';
import ContentHeader from '@/app/(dashboard)/admin/content/content-header';
import ContentTable from '@/app/(dashboard)/admin/content/content-table';

export default async function Content() {
  const postsData = await prisma.post.findMany( {
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  } );

  const posts = postsData ? postsData : [];

  return (
    <div>
      <ContentHeader posts={posts} />
      <ContentTable
        posts={posts}
        offset={6}
        totalPosts={posts.length || 0}
      />
    </div>
  );
};
