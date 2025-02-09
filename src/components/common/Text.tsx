import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export type textProps = {
  text: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Text = ({ text, value, onChange }: textProps) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        "& > :not(style)": { width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <span className="w-24 text-gray-700">{text}</span>
      <TextField
        id="standard-basic"
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default Text;
