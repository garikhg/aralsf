'use client';

import React from 'react';
import { Button } from '@components/ui';
import { CirclePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ContentHeader = ({ posts }: { posts: any }) => {
  const router = useRouter();

  const handleAddNewPost = () => {
    router.push( '/admin/content/add' );
  };

  return (
    <div className="flex items-center gap-2 py-3">
      <div className="flex items-center">
        <Button variant="link" size="sm" className="text-sm">All ({posts.length > 0 ? posts.length : '0'})</Button>
        <span className="text-xs">|</span>
        <Button variant="link" size="sm" className="text-sm">Published</Button>
        <span className="text-xs">|</span>
        <Button variant="link" size="sm" className="text-sm">Draft (0)</Button>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <Button
          variant="default"
          size="sm"
          className="h-8 gap-1"
          type="button"
          onClick={handleAddNewPost}
        >
          <CirclePlus className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-sm">Add Content</span>
        </Button>
      </div>
    </div>
  );
};

export default ContentHeader;
