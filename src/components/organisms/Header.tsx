import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

// Header (로그인/회원가입 버튼 포함)
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-28 bg-slightlylighter flex items-center">
      <div className="max-w-5xl w-full mx-auto font-extrabold flex items-center justify-between text-red">
        <span className="text-2xl cursor-pointer" onClick={() => navigate("/")}>
          Pioneer
        </span>
        <Button
          backgroundColor="bg-white"
          text="로그인/회원가입"
          textColor="text-black"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Header;
