import React from "react";
import { sizes } from "../../styles/sizes";

export type ImageProps = {
  src: string;
  size?: keyof typeof sizes.size; // "small" | "medium" | "large"
  className?: string; // 추가적인 Tailwind 스타일 적용 가능
  onClick?: () => void; // 클릭 이벤트 핸들러 추가
};

const Image = ({
  src,
  size = "medium",
  className = "",
  onClick,
}: ImageProps) => {
  return (
    <img
      src={src}
      className={`rounded-full object-cover cursor-pointer ${className}`} // 기본 스타일 + 사용자 지정 클래스
      style={{
        width: sizes.size[size], // sizes에서 해당 size 값 가져오기
        height: sizes.size[size], // 가로, 세로 동일한 크기로 설정
      }}
      onClick={onClick} // 클릭 이벤트 추가
    />
  );
};

export default Image;
