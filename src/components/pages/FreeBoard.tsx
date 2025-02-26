import React from "react";
import { useNavigate } from "react-router-dom";

const FreeBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">자유 게시판</h1>

      {/* ✅ 게시글 작성 버튼 */}
      <button
        onClick={() => navigate("/createpost")} // 게시글 작성 페이지로 이동
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
      >
        게시글 작성
      </button>

      {/* 게시글 목록 (예제) */}
      <div className="mt-4">{/* 게시글 목록이 여기에 들어감 */}</div>
    </div>
  );
};

export default FreeBoard;
