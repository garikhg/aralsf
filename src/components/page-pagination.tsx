import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

interface PagePaginationProps {
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    onPageChange: (page: number) => void;
}

const PagePagination: React.FC<PagePaginationProps> = ({currentPage, totalPages, onPageChange, isLoading}) => {
    const maxVisiblePages = 5;

    const getPageNumbers = () => {
        const pageNumbers = [];
    }
    console.log( isLoading )
    return (
        <Pagination className="mt-8 items-center justify-between">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        className={cn(
                            'h-10 pr-3',
                            currentPage <= 1 ? 'opacity-60 pointer-events-none' : '',
                        )}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange( currentPage - 1 )
                        }}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        className={cn(
                            'h-10 pl-3',
                            totalPages === currentPage ? 'opacity-60 pointer-events-none' : '',
                        )}
                        onClick={(e) => {
                            e.preventDefault();
                            onPageChange( currentPage + 1 )
                        }}
                    />
                </PaginationItem>
            </PaginationContent>

            <div className="h-7 flex items-center">
                {!isLoading ? totalPages > 1 && (
                    <span className="text-sm text-gray-500">Page {currentPage} of {totalPages}</span>
                ) : (
                    <Skeleton className="bg-gray-200 w-24 h-3 rounded-full"/>
                )}
            </div>
        </Pagination>
    );
};

export default PagePagination;
