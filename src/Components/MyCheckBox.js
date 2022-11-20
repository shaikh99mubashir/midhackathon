import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MyCheckBox(props) {
  const { onChange, name, cBValue } = props;
  return (
    <div>
      {name}
          <Checkbox
            {...label}
            
            onChange={onChange}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
        
    </div>
  );
}
