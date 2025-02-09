import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="mb-4 text-lg font font-bold">Pioneer</span>
      <Input />
      <Button backgroundColor="bg-black" textColor="text-white" text="로그인" />
      <span>아이디 찾기 | 비밀번호 찾기</span>
      <span className="cursor-pointer" onClick={() => navigate("/authlinks")}>
        아직 회원이 아니신가요?
      </span>
    </div>
  );
};

export default Login;
