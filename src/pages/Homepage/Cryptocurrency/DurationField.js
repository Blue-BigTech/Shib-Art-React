import React from "react";
import { Box, Typography } from "@mui/material";

import { palette } from "../../../themes";

const durations = [
  { value: 4, time: "days" },
  { value: 12, time: "hours" },
  { value: 15, time: "mins" },
  { value: 34, time: "seconds" },
];

export const DurationField = ({ timerValue }) => {
  return (
    <Box mt={6}>
      <Typography
        variant="h3"
        sx={{
          fontSize: 20,
          color: "#525252 !important",
          textAlign: "center",
        }}
      >
        Time Until Price Increase
      </Typography>
      <Box
        mt={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {durations.map((item, i) => (
          <Box
            key={i}
            p={2}
            mx={1}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: { sm: "158px", xs: "140px" },
              height: "96px",
              background: "#3C2C2D",
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: 48, xs: 36 },
                fontWeight: 700,
                lineHeight: 1,
                color: palette.common.white,
              }}
            >
              {i === 0
                ? parseInt(timerValue)
                : i === 1
                ? parseInt((timerValue - parseInt(timerValue)) * 24)
                : i === 2
                ? parseInt(
                    ((timerValue - parseInt(timerValue)) * 24 -
                      parseInt((timerValue - parseInt(timerValue)) * 24)) *
                      60
                  )
                : parseInt(
                    (((timerValue - parseInt(timerValue)) * 24 -
                      parseInt((timerValue - parseInt(timerValue)) * 24)) *
                      60 -
                      parseInt(
                        ((timerValue - parseInt(timerValue)) * 24 -
                          parseInt((timerValue - parseInt(timerValue)) * 24)) *
                          60
                      )) *
                      60
                  )}
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                color: "#F8CAA0",
              }}
            >
              {item.time}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
