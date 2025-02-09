import React from "react";

// buttonProps 타입 정의
export type buttonProps = {
  backgroundColor:
    | "bg-lightyellow"
    | "bg-slightlylighter"
    | "bg-turquoise"
    | "bg-cornflowerblue"
    | "bg-white"
    | "bg-black";
  textColor: "text-white" | "text-black";
  text: string;
  onClick?: () => void;
  onFocus?: () => void;
};

// Button 컴포넌트
const Button = ({ backgroundColor, textColor, text, onClick }: buttonProps) => {
  return (
    <button
      className={`${backgroundColor} ${textColor} w-fit p-3 rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
