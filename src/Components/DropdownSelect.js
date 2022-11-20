import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

export default function DropdownSelect(prop) {
  let {
    status,
    id,
    value,
    sx,
    disabled,
    width,
    onChange,
    variant,
  } = prop;


  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: width }}>
      <FormControl sx={sx} fullWidth>
        <InputLabel id="demo-simple-select-label">{status}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={status}
          onChange={handleChange}
          disabled={disabled}
          variant={variant}
        >
          {id && Object.entries(id).map(([key, value], index) => {
            return (
            <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}