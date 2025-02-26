import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "../common/Button";
import { sizes } from "../../styles/sizes";

import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // 눈 아이콘 추가
import DaumPostcode from "react-daum-postcode";

const SignupForm = () => {
  const [addrValue, setAddrValue] = useState("");
  const [zipNoValue, setZipNoValue] = useState("");
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 비밀번호 확인 보이기 상태

  const onClickAddr = () => {
    setIsPostcodeVisible(true);
  };

  const handlePostcodeComplete = (data: any) => {
    if (data.address) {
      setAddrValue(data.address);
      setZipNoValue(data.zonecode);
    }
  };

  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
    return passwordRegex.test(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError(
        "비밀번호는 최소 8자, 영문, 숫자, 특수문자를 포함해야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-24">
      <h2
        className="font-extrabold mb-9"
        style={{ fontSize: sizes.fontSize.xxxlarge }}
      >
        회원가입
      </h2>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1 } }}
        noValidate
        autoComplete="off"
        className="flex flex-col w-96"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input placeholder="이메일 주소" />
        <div className="flex gap-2">
          <Input placeholder="아이디" />
          <Button
            backgroundColor="bg-lightyellow"
            text="중복확인"
            textColor="text-black"
          />
        </div>

        {/* 비밀번호 입력 필드 (눈 아이콘 포함) */}
        <TextField
          label="비밀번호"
          type={showPassword ? "text" : "password"} // showPassword 상태에 따라 보이기/숨기기
          variant="outlined"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* 비밀번호 확인 입력 필드 (눈 아이콘 포함) */}
        <TextField
          label="비밀번호 확인"
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={!!confirmPassword && confirmPassword !== password}
          helperText={
            confirmPassword && confirmPassword !== password
              ? "비밀번호가 일치하지 않습니다."
              : ""
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Input placeholder="이름" />

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Input
              disabled
              placeholder="우편번호"
              value={zipNoValue}
              id="zipNo"
            />
            <Button
              backgroundColor="bg-lightyellow"
              textColor="text-black"
              text="주소 검색"
              onClick={onClickAddr}
            />
          </div>
          <Input placeholder="도로명 주소" value={addrValue} id="addr" />
          <Input placeholder="상세 주소" id="addrDetail" />
        </div>

        <Button
          backgroundColor="bg-slightlylighter"
          textColor="text-black"
          text="가입"
        />
      </Box>

      {/* 주소 검색 팝업 */}
      {isPostcodeVisible && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsPostcodeVisible(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <DaumPostcode
              onComplete={handlePostcodeComplete}
              style={{ width: "400px", height: "500px" }}
            />
            <button
              onClick={() => setIsPostcodeVisible(false)}
              className="absolute top-2 right-2 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
