import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../../themes";
import { Context } from "../../../context/AppContext";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

export const Referral = () => {
  const { walletAddress } = useContext(Context);
  const { account, activate } = useWeb3React();

  useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <>
      {walletAddress !== "undefined" && (
        <Box
          p={3}
          mt={6}
          sx={{
            background: `${palette.common.white}`,
            borderRadius: "4px",
            border: `2px solid ${palette.common.brown}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: `${palette.common.brown} !important`,
              fontWeight: 700,
              textAlign: "center",
              letterSpacing: "2.5px",
              zIndex: 1000,
            }}
          >
            REFERRAL CODE: 0x1234567890
          </Typography>
        </Box>
      )}
    </>
  );
};
