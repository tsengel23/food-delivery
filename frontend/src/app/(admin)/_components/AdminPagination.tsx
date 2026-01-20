import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

type AdminPagination = {
  currentPage: number;
  totalPage: number;
  nextPage: () => void;
  prevPage: () => void;
  className: string;
};

export const AdminPagination = ({
  currentPage,
  totalPage,
  nextPage,
  prevPage,
}: AdminPagination) => {
  return (
    <div className="flex justify-end">
      <Pagination className="w-fit m-0">
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              variant="ghost"
            >
              <ChevronLeft />
            </Button>
          </PaginationItem>
          {currentPage > 1 && (
            <PaginationItem>
              <Button
                className="w-8 h-8 rounded-full"
                onClick={prevPage}
                variant="outline"
              >
                {currentPage - 1}
              </Button>
            </PaginationItem>
          )}
          <PaginationItem>
            <Button
              variant="default"
              className="bg-gray-400 w-8 h-8 rounded-full"
            >
              {currentPage}
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          {currentPage < totalPage && (
            <PaginationItem>
              <Button onClick={prevPage} variant="outline">
                {currentPage + 1}
              </Button>
            </PaginationItem>
          )}
          <PaginationItem>
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPage}
              variant="ghost"
            >
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
