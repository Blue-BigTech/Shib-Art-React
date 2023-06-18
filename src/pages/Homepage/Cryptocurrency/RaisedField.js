import React from "react";
import { Box, Typography } from "@mui/material";

import { palette } from "../../../themes";

export const RaisedField = ({ raisedValue }) => {
  return (
    <Box
      p={3}
      mt={6}
      sx={{
        background: "#724c29",
        borderRadius: "4px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: `${palette.common.white} !important`,
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: "2.5px",
          zIndex: 1000,
        }}
      >
        {raisedValue === 0
          ? `Raise is coming soon`
          : `RAISED SO FAR: $ ${(Math.round(raisedValue * 100) / 100)
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
      </Typography>
    </Box>
  );
};
