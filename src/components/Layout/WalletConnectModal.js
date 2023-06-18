import { useEffect } from "react";
import { Box, Typography, Modal, Grid, Button } from "@mui/material";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import { palette } from "../../themes";

import {
  walletLists,
  walletconnect,
  injected,
  walletlink,
} from "../../config/wallet_config";

import logo from "../../assets/images/home/modal-logo.svg";
import closeIcon from "../../assets/images/home/close.png";
import closeIcon_black from "../../assets/images/home/closeIcon-black.png";
import placeholder1 from "../../assets/images/home/placeholder1.png";

export const WalletConnectModal = ({
  openModal,
  setOpenModal,
  setWalletAddress,
  setClickStatus,
}) => {
  const { account, activate } = useWeb3React();

  const connetHandler = async (provider) => {
    try {
      setClickStatus(true);
      if (provider === walletconnect) {
        await activate(provider);
        setOpenModal(false);
      }
      if (provider === injected) {
        if (window.ethereum === undefined) {
          alert("Please install metamask ");
        }
        const provider1 = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        await provider1.send("eth_requestAccounts", []);
        activate(injected);
        setOpenModal(false);
      }

      if (provider === walletlink) {
        await activate(provider);
        setOpenModal(false);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (account !== undefined) {
      localStorage.setItem("wallet account", account);
      setWalletAddress(account);
    }
  }, [account, setWalletAddress]);

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xl: "55%", lg: "65%", sm: "85%", xs: "90%" },
          height: "80%",
        }}
      >
        <Grid container height={"100%"}>
          <Grid
            item
            sm={6}
            xs={12}
            py={10}
            px={{ sm: 10, xs: 4 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
              background: "#F8CAA0",
              position: "relative",
            }}
          >
            <Box
              component={"img"}
              src={closeIcon_black}
              alt=""
              onClick={() => setOpenModal(false)}
              sx={{
                display: { sm: "none", xs: "block" },
                width: "30px",
                position: "absolute",
                right: "10px",
                top: "10px",
                cursor: "pointer",
              }}
            />
            <Box
              component={"img"}
              src={logo}
              alt=""
              sx={{
                width: { sm: "200px", xs: "160px" },
              }}
            />
            <Box>
              <Box
                display={"flex"}
                flexDirection={{ sm: "row", xs: "column" }}
                justifyContent={"space-between"}
                mt={{ sm: 0, xs: 6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { sm: 42, xs: 36 },
                    maxWidth: { sm: "initial", xs: "50%" },
                  }}
                >
                  Connect wallet.
                </Typography>
                <Button
                  sx={{
                    width: { sm: "142px", xs: "100px" },
                    height: { sm: "35px", xs: "25px" },
                    background: "#F7FBFA",
                    borderRadius: { sm: "48px", xs: "30px" },
                    marginTop: { sm: 0, xs: "12px" },
                    "&:hover": {
                      background: "#feecdb",
                    },
                  }}
                >
                  <TrendingFlatOutlinedIcon
                    sx={{
                      fontSize: { sm: 40, xs: 30 },
                      color: palette.common.black,
                    }}
                  />
                </Button>
              </Box>
              <Typography
                variant="h4"
                mt={4}
                sx={{
                  color: "#8C7662",
                }}
              >
                Choose how you want to connect. There are several wallet
                providers.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            py={10}
            px={{ sm: 10, xs: 4 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{ background: "black" }}
          >
            <Box
              display={{ sm: "block", xs: "none" }}
              sx={{
                position: "relative",
              }}
            >
              <Box
                component={"img"}
                src={closeIcon}
                alt=""
                onClick={() => setOpenModal(false)}
                sx={{
                  display: { sm: "block", xs: "none" },
                  width: "30px",
                  position: "absolute",
                  right: "-20px",
                  top: "-20px",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#F7FBFA",
                }}
              >
                Choose the wallet
              </Typography>

              <Box display={"flex"} flexDirection={"column"} gap={2} mt={6}>
                {walletLists.map((item, i) => (
                  <Box
                    key={i}
                    className="wallet_item"
                    display={"flex"}
                    justifyContent={"space-between"}
                    py={4}
                    px={{ sm: 6, xs: 4 }}
                    onClick={async () => {
                      await connetHandler(item.provider);
                    }}
                    sx={{
                      border: "2px solid #202025",
                      borderRadius: "12px",
                      cursor: "pointer",
                      "&:hover": {
                        background: "#202025",
                      },
                    }}
                  >
                    <Box display={"flex"} alignItems={"center"} gap={4}>
                      <Box
                        component={"img"}
                        src={item.icon}
                        alt=""
                        sx={{
                          width: "30px",
                        }}
                      />
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: 20,
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <ArrowForwardIcon className="wallet_arrowIcon" />
                  </Box>
                ))}
              </Box>

              <Box display={"flex"} justifyContent={"center"} mt={6}>
                <Box display={"flex"} alignItems={"center"} gap={3}>
                  <Box
                    component={"img"}
                    src={placeholder1}
                    alt=""
                    sx={{
                      width: "20px",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#F7FBFA",
                    }}
                  >
                    Scan to connect
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Button
              variant="h5"
              sx={{
                background: "rgba(32, 32, 37, 0.5)",
                borderRadius: "12px",
                padding: "10px 24px",
                color: "#E1E2E2 !important",
                textTransform: "inherit",
                marginTop: "16px",
              }}
            >
              I don’t have a wallet
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
