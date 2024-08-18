import React from 'react';
import { TableCell, TableRow } from '@components/ui/table';
import { Badge } from '@components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import { Button } from '@components/ui';
import { MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ContentProps {
  content?: any;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  const router = useRouter();

  const handleEdit = () => {
    return router.push( `/admin/content/edit/${content.id}` );
  };

  return (
    <TableRow>
      <TableCell>
        {content?.title}
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {content.published ? 'Published' : 'Unpublished'}
        </Badge>
      </TableCell>
      <TableCell>{content?.createdAt?.toLocaleDateString()}</TableCell>
      <TableCell>
        <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={handleEdit}
              className="capitalize cursor-pointer"
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => console.log( e )}
              className="capitalize cursor-pointer"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Content;
