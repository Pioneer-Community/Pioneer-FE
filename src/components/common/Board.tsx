import React from "react";

export type BoardProps = {
  text: string;
  icontag: React.ReactNode;
  onClick?: () => void;
};

const Board = ({ text, icontag, onClick }: BoardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 w-28 h-28 rounded-full hover:bg-cornflowerblue cursor-pointer"
      onClick={onClick}
    >
      <span>{icontag}</span>
      <span className="text-base">{text}</span>
    </div>
  );
};

export default Board;
