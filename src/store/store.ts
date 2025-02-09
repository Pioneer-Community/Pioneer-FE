// src/store.ts
import { create } from "zustand";

type ProfileState = {
  image: string;
  name: string;
  username: string;
  bio: string;
  setProfile: (profile: Partial<ProfileState>) => void; // 부분 업데이트 함수
};

export const useProfileStore = create<ProfileState>((set) => ({
  image: "/images/프로필.png",
  name: "홍길동",
  username: "gildong",
  bio: "안녕하세요! 저는 홍길동입니다.",
  setProfile: (profile) => set((state) => ({ ...state, ...profile })),
}));
