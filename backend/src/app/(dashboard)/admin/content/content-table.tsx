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
import { ChevronDown } from 'lucide-react';
import { Badge } from '@components/ui/badge';


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
            {posts.length > 0 ? posts.map( (content: any) => {
              return (
                <TableRow key={content?.id}>
                  <TableCell>
                    {content?.title || 'Not content title'}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {content.published ? 'Published' : 'Unpublished'}
                    </Badge>
                  </TableCell>
                  <TableCell>{content?.createdAt?.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <span>Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            } ) : (
              <p className="text-gray-700">Not content</p>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContentTable;
