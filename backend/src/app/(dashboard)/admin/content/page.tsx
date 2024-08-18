import React from 'react';
import prisma from '@lib/prisma';
import ContentTable from '@/app/(dashboard)/admin/content/content-table';
import ContentHeader from '@/app/(dashboard)/admin/content/content-header';

export default async function Content() {
  // const [posts, setPosts] = useState( [] );

  const postsData = await prisma.post.findMany( {
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  } );

  const posts = postsData ? postsData : [];

  console.log( posts );
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
