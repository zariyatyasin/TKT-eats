"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({});
  const [current, setCurrent] = useState(currentPage);

  useEffect(() => {
    const newParams = new URLSearchParams(window.location.search);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => newParams.append(key, v));
        } else {
          newParams.set(key, value.toString());
        }
      }
    });
    newParams.set("page", current.toString());
    router.push(`?${newParams.toString()}`, { scroll: false });
  }, [filters, current, router]);

  const handlePageClick = (page: number) => {
    setCurrent(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    const halfMaxPageButtons = Math.floor(maxPageButtons / 2);

    let startPage = Math.max(1, current - halfMaxPageButtons);
    let endPage = Math.min(totalPages, current + halfMaxPageButtons);

    if (current <= halfMaxPageButtons) {
      endPage = Math.min(totalPages, maxPageButtons);
    } else if (current + halfMaxPageButtons >= totalPages) {
      startPage = Math.max(1, totalPages - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          size="sm"
          className={`w-8 h-8 p-0 ${
            current === i ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
      <span className="text-sm text-gray-500 mb-2 sm:mb-0">
        Showing 15 per page
      </span>
      <div className="flex gap-2">
        {renderPageNumbers()}
        <Button
          variant="outline"
          size="sm"
          className="w-8 h-8 p-0"
          onClick={() => handlePageClick(current + 1)}
          disabled={current === totalPages}
        >
          <span className="sr-only">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
