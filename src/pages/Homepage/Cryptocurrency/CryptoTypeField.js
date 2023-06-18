import React, { useEffect, useCallback } from "react";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { palette } from "../../../themes";
import { cryptoTypes, networks } from "../../../config/wallet_config";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const changeDefault = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");

    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ ...networks[networkName] }],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const CryptoTypeField = ({
  setCurrentChainId,
  cryptoType,
  setCryptoType,
  setSelectedTokenIcon,
  setChainStatus,
}) => {
  const handleDefaultSwitch = async (networkName) => {
    await changeDefault({ networkName });
  };

  const networkChanged = useCallback(
    (chainId) => {
      setCurrentChainId(chainId);
      setChainStatus(true);
    },
    [setCurrentChainId, setChainStatus]
  );

  useEffect(() => {
    if (window.ethereum) {
      handleDefaultSwitch("sepolia");
      window.ethereum.on("chainChanged", networkChanged);

      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }
  }, [networkChanged]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCryptoType(value);
  };

  return (
    <>
      <Box
        display={{ sm: "flex", xs: "none" }}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={4}
      >
        {cryptoTypes.map((item, i) => (
          <Button
            key={i}
            onClick={() => {
              // setCurrentChainId(item.chainId)
              setCryptoType(item.type);
              setSelectedTokenIcon(item.symbol1);
              // item.networkType === "bnb" ?
              // handleNetworkSwitch(item.networkType) :
              handleDefaultSwitch(item.networkType);
            }}
            sx={{
              width: "110px",
              background: cryptoType === item.type ? palette.common.white : "",
              border: "2px solid #3C2C2D",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              "&:hover": {
                background: "#f6e1ce",
              },
            }}
          >
            <Box
              component={"img"}
              alt=""
              src={cryptoType !== item.type ? item.symbol : item.symbol1}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                variant="h4"
                sx={{
                  color:
                    cryptoType === item.type ? palette.common.black : "#8C7662",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#8C7662 !important",
                }}
              >
                {item.token}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
      <Box display={{ sm: "none", xs: "block" }}>
        <FormControl sx={{ width: "100%" }}>
          <Select
            sx={{
              border: "2px solid #202025",
              borderRadius: "4px",
            }}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={cryptoType}
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            {cryptoTypes.map((item, i) => (
              <MenuItem
                key={i}
                value={item.type}
                onClick={() => setSelectedTokenIcon(item.symbol1)}
              >
                <Box
                  display={"flex"}
                  justifyContent={"cemter"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Box component={"img"} src={item.symbol1} alt="" />
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: palette.common.black,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#8C7662 !important",
                      }}
                    >
                      {item.token}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
