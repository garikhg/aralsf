'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card';
import { Button, Input } from '@components/ui';
import { Trash2 } from 'lucide-react';
import { ContentDetails } from '@/app/(dashboard)/admin/content/edit/[id]/contentDetails';
import { useRouter } from 'next/navigation';

export default function ContentEdit() {
  const router = useRouter();

  return (
    <div>
      <div className="h-14 flex items-center">
        <h2 className="font-semibold">
          Add New
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        <Card className="col-span-4">
          <CardHeader>
            <Input
              placeholder="Add title..."
              className="text-3xl border-none rounded-none px-0 focus-visible:ring-0"
            />
            <Input
              placeholder="slug"
              disabled={true}
              className="border-none rounded-none px-0 focus-visible:ring-0"
            />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">

            </div>
          </CardContent>

          <CardFooter className="justify-between">
            <Button variant="ghost" className="flex gap-1 text-red-800">
              <Trash2 className="w-4 h-4" />
              <span>Trash</span>
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex gap-1"
                onClick={() => router.push( '/admin/content/' )}
              >
                <span>Cancel</span>
              </Button>
              <Button variant="default" className="flex gap-1">
                <span>Update</span>
              </Button>
            </div>

          </CardFooter>
        </Card>
        <ContentDetails />
      </div>
    </div>
  );
};

