import { Pagination } from "@heroui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CourseListPagination = ({ totalCount }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("PageNumber") || 1);
  const rows = Number(searchParams.get("RowsOfPage") || 4);

  const totalPages = Math.max(0, Math.ceil(totalCount / rows));

  const handleChange = (newPage) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("PageNumber", String(newPage));
      return newParams;
    });
  };

  const pageNumbers = useMemo(() => {
    const pages = [];

    if (totalPages < 1) return [0];

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

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [page, totalPages]);

  return (
    <div className="w-full max-w-2xs overflow-x-auto sm:max-w-full">
      <Pagination className="flex justify-center">
        <Pagination.Content className="flex flex-row-reverse items-center bg-neutral-50 h-12 rounded-2xl text-textC font-bold">
          <Pagination.Item className="w-11 h-full flex items-center justify-center">
            <Pagination.Previous
              isDisabled={page <= 1}
              onPress={() => handleChange(Math.max(1, page - 1))}
            >
              <Pagination.PreviousIcon />
            </Pagination.Previous>
          </Pagination.Item>

          {pageNumbers.map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item
                key={`ellipsis-${i}`}
                className="w-11 h-full flex items-center justify-center"
              >
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : p == 0 ? (
              ""
            ) : (
              <Pagination.Item
                key={`page-${p}-${i}`}
                className={`w-11 h-full flex items-center justify-center ${
                  p === page ? "bg-primary-300 rounded-lg text-white" : ""
                }`}
              >
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => handleChange(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}

          <Pagination.Item className="w-11 h-full flex items-center justify-center">
            <Pagination.Next
              isDisabled={page >= totalPages}
              onPress={() => handleChange(Math.min(totalPages, page + 1))}
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
