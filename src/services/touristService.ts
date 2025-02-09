// 관광지 API 처리
// (관광지 목록 조회, 관광지 추천 추가 등)

// src/types.ts

// 관광지 타입 정의
export interface TouristSpot {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  rating: number; // 평점
}

// 관광지 API 상태 타입 정의
export interface TouristSpotState {
  spots: TouristSpot[]; // 관광지 목록
  loading: boolean; // 로딩 상태
  error: string | null; // 에러 메시지
}
