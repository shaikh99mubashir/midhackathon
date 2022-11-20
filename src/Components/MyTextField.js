import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MyTextField(props) {
  const { value, label, variant, onChange, type, sx} = props;
  return (
   
      <TextField
        label={label}
        variant={variant}
        onChange={onChange}
        type={type}
        value={value}
        sx={sx}
      />
  );
}
