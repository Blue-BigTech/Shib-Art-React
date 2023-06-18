import React from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../themes";

const valueTypes = [
  { name: "Balance" },
  { name: "Current Price" },
  { name: "Next Price" },
  { name: "Your Points" },
];

export const TokenBalanceField = ({
  points,
  tokenBalance,
  currentPrice,
  nextPrice,
  walletAddress,
}) => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={6}
      py={4}
      mt={6}
      sx={{
        background: palette.common.white,
        borderRadius: "4px",
      }}
    >
      {valueTypes.map((item, i) => (
        <Box
          key={i}
          my={{ sm: 0, xs: 1 }}
          sx={{
            width: { sm: "initial", xs: "50%" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#686A6C !important",
            }}
          >
            {" "}
            {item.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              // display: "flex",
              // justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            {i === 0
              ? walletAddress === "undefined"
                ? "-"
                : Number(tokenBalance).toFixed(7)
              : i === 1
              ? `$ ${Number(currentPrice).toFixed(7)}`
              : i === 2
              ? `$ ${Number(nextPrice).toFixed(7)}`
              : i === 3 && walletAddress === "undefined"
              ? "-"
              : points}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
