import React from 'react';
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem, PaginationLink,
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
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push( i );
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pageNumbers.push( i );
                }
                pageNumbers.push( 'ellipsis' );
                pageNumbers.push( totalPages );
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push( 1 )
                pageNumbers.push( 'ellipsis' );
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pageNumbers.push( i );
                }
            } else {
                pageNumbers.push( 1 );
                pageNumbers.push( 'ellipsis' );
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push( i );
                }
                pageNumbers.push( 'ellipsis' );
                pageNumbers.push( totalPages );
            }
        }
        return pageNumbers;
    }
    return (
        <Pagination className="mt-8 flex-col md:flex-row items-center justify-between">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="javascript:void(0)"
                        className={cn( 'h-10 pr-3', currentPage <= 1 ? 'opacity-60 pointer-events-none' : '', )}
                        onClick={() => onPageChange( currentPage - 1 )}
                    />
                </PaginationItem>
                {getPageNumbers().length > 1 && getPageNumbers().map( (pageNumber, index) => (
                    <PaginationItem key={index}>
                        {pageNumber === 'ellipsis' ? (
                            <PaginationEllipsis/>
                        ) : (
                            <PaginationLink
                                href="javascript:void(0)"
                                onClick={() => onPageChange( pageNumber as number )}
                                className={cn( currentPage === pageNumber ? 'pointer-events-none bg-accent' : '' )}
                                isActive={currentPage === pageNumber}
                            >
                                {pageNumber}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ) )}
                <PaginationItem>
                    <PaginationNext
                        href="javascript:void(0)"
                        className={cn(
                            'h-10 pl-3',
                            totalPages === currentPage ? 'opacity-60 pointer-events-none' : '',
                        )}
                        onClick={() => onPageChange( currentPage + 1 )}
                    />
                </PaginationItem>
            </PaginationContent>

            <div className="hidden h-7 md:flex items-center">
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
