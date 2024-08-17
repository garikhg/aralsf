import React from 'react';
import prisma from '@lib/prisma';

export default async function Content() {
  const posts = await prisma.post.findMany( {
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  } );

  console.log( posts );
  return (
    <div>
      {posts.length && posts.map( (post) => (
        <div key={post?.id}>
          {post?.title}
          {/*{post?.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}*/}
        </div>
      ) )}
    </div>
  );
};
