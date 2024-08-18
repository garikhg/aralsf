'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { Button, Input, Table } from '@components/ui';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@components/ui/dropdown-menu';
import { ChevronDown} from 'lucide-react';
import Content from '@/app/(dashboard)/admin/content/content';


interface ContentTableProps {
  posts?: any;
  offset?: number;
  totalPosts?: number;
}

const ContentTable: React.FC<ContentTableProps> = ({ posts, offset, totalPosts }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content</CardTitle>
        <CardDescription>
          Manage your content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          <Input
            placeholder="Find content by title"
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                className="capitalize"
              >
                Column 1
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                className="capitalize"
              >
                Column 2
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                className="capitalize"
              >
                Column 3
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length > 0 ? posts.map( (content: any) => (
              <Content
                key={content.id}
                content={content}
              />
            ) ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  <p className="text-gray-700">Not content</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContentTable;
