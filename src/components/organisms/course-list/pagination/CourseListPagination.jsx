import { Pagination } from "@heroui/react";
import React, { useMemo, useState } from "react";

const CourseListPagination = () => {
  const [page, setPage] = useState(1);
  const totalPages = 12;

  const pageNumbers = useMemo(() => {
    const pages = [];

    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  }, [page, totalPages]);

  return (
    <div className="w-full max-w-2xs overflow-x-auto sm:max-w-full">
      <Pagination className="flex justify-center">
        <Pagination.Content className="flex flex-row-reverse items-center bg-neutral-50 h-12 rounded-2xl text-textC font-bold">
          {/* Previous */}
          <Pagination.Item className="w-11 h-full flex items-center justify-center">
            <Pagination.Previous
              isDisabled={page === 1}
              onPress={() => setPage((p) => Math.max(1, p - 1))}
            >
              <Pagination.PreviousIcon />
            </Pagination.Previous>
          </Pagination.Item>

          {/* Pages */}
          {pageNumbers.map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item
                key={`ellipsis-${i}`}
                className="w-11 h-full flex items-center justify-center"
              >
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : p == page ? (
              <Pagination.Item
                key={p}
                className="w-11 h-full bg-primary-300 rounded-lg text-white flex items-center justify-center"
              >
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => setPage(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ) : (
              <Pagination.Item
                key={p}
                className="w-11 h-full flex items-center justify-center"
              >
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => setPage(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}

          {/* Next */}
          <Pagination.Item className="w-11 h-full flex items-center justify-center">
            <Pagination.Next
              isDisabled={page === totalPages}
              onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
};

export default CourseListPagination;
