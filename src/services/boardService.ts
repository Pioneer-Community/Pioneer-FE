// 게시글 API 처리
// 게시글 목록, 작성, 수정, 삭제 등

// src/types.ts

// 게시글 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

// 게시글 API 상태 타입 정의
export interface PostState {
  posts: Post[]; // 게시글 목록
  loading: boolean; // 로딩 상태
  error: string | null; // 에러 메시지
}
