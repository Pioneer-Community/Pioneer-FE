import React, { useState } from "react";
import PaginationWrapper from "../common/PaginationWrapper ";

// 자유게시판, 정보게시판의 글 리스트
const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = 100; // 예시로 100개의 항목 잇다고 가정
  const itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // 페이지 변경 시 상태 업데이트
  };

  return (
    <div>
      <PaginationWrapper
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange} // 페이지 변경 함수 전달
      />
    </div>
  );
};

export default PostList;
