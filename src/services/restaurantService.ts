// 음식점 API 처리
// (음식점 목록 조회, 음식점 추천 추가 등)

// src/types.ts

// 음식점 타입 정의
export interface Restaurant {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  rating: number; // 평점
}

// 음식점 API 상태 타입 정의
export interface RestaurantState {
  restaurants: Restaurant[]; // 음식점 목록
  loading: boolean; // 로딩 상태
  error: string | null; // 에러 메시지
}
