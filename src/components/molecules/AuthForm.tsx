import { TextField } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "../common/Button";

// 로그인/회원가입 폼 (Input + Button)
const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <TextField
        id="outlined-basic"
        label="ID"
        variant="outlined"
        sx={{ width: "25.5ch" }}
      />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <FormControl sx={{ width: "25.5ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
      </Box>
      <Button backgroundColor="bg-black" text="로그인" textColor="text-white" />
      <div className="flex flex-col">
        <span>아이디 찾기 / 비번 찾기</span>
        <span>회원가입하시겠습니까?</span>
      </div>
    </div>
  );
};

export default AuthForm;
