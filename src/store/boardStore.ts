// 상태관리 (게시판 관련 상태)
// src/types.ts

// 게시글 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

// 게시판 상태 타입 정의
export interface BoardState {
  posts: Post[]; // 게시글 목록
  loading: boolean; // 게시판 로딩 상태
  error: string | null; // 에러 메시지
}
