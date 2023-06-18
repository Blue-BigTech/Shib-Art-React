import * as React from "react";
import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  FormControl,
} from "@mui/material";

export const InputField = ({ icon, handleChange, inputValue }) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <Input
        id="standard-adornment-password"
        type={"text"}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility">
              <Box component="img" src={icon} alt="" />
            </IconButton>
          </InputAdornment>
        }
        sx={{
          padding: "8px",
          border: "2px solid #202025",
          borderRadius: "4px",
          color: "black",
          fontWeight: 700,
          "&::before": {
            borderBottom: "none",
          },
        }}
      />
    </FormControl>
  );
};
