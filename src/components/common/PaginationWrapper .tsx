import React from "react";
import ReactPagination from "react-js-pagination";

// 타입을 `any`로 지정해 줘서 문제를 우회할 수 있어
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-4">
      {/* `ReactPagination`을 `any` 타입으로 캐스팅 */}
      {(ReactPagination as any)({
        activePage: currentPage,
        itemsCountPerPage: itemsPerPage,
        totalItemsCount: totalItems,
        pageRangeDisplayed: 5,
        onChange: onPageChange,
        innerClass: "flex gap-2",
        activeClass: "bg-blue-500 text-white px-3 py-1 rounded",
        itemClass: "border px-3 py-1 rounded hover:bg-gray-200 cursor-pointer",
        disabledClass: "text-gray-400 cursor-not-allowed",
      })}
    </div>
  );
};

export default PaginationWrapper;
