import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

import { Box, Link, Button, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { WalletConnectModal } from "./WalletConnectModal";
import { ProfileMenuBar } from "./ProfileMenuBar";
import { palette } from "../../themes";

import logo from "../../assets/images/home/logo.svg";
import menuIcon from "../../assets/images/home/menu-icon.png";
import { Context } from "../../context/AppContext";

const navbars = [
  { name: "BUY $ART", url: "#buy$ART" },
  {
    name: "WHITEPAPER",
    url: "https://docs.google.com/document/d/1RbQczVVOjoHFzwivRfQSpK66b3dofENvHcSQF9WW7fQ/edit",
  },
  { name: "FAQ", url: "/FAQ" },
];

export const Header = () => {
  const navigate = useNavigate();
  const { account, deactivate } = useWeb3React();

  const {
    openModal,
    setOpenModal,
    walletAddress,
    setWalletAddress,
    setClickStatus,
  } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(null);
  const open = Boolean(profileMenuOpen);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        px={{ sm: 6, xs: 4 }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          position: "relative",
        }}
      >
        <Box
          py={5}
          pr={6}
          sx={{
            borderRight: { md: "2px solid #e9e9e9", sm: "none" },
          }}
        >
          <Box
            component={"img"}
            alt=""
            src={logo}
            onClick={() => navigate("/")}
            sx={{
              width: { xs: "180px" },
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          display={{ md: "flex", xs: "none" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={15}
          py={5}
        >
          {navbars.map((item, i) => (
            <Box key={i}>
              {item.name === "FAQ" ? (
                <Typography
                  variant="h5"
                  onClick={() => navigate("/FAQ")}
                  sx={{
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                >
                  FAQ
                </Typography>
              ) : (
                <Link
                  key={i}
                  variant="h5"
                  href={item.url}
                  target={item.name === "WHITEPAPER" ? "_blank" : "_self"}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Link>
              )}
            </Box>
          ))}
          {walletAddress === "undefined" ? (
            <Button
              variant="h5"
              onClick={() => setOpenModal(true)}
              sx={{
                border: "2px solid #555555",
                borderRadius: "4px",
                padding: "12px 32px",
                fontWeight: 600,
                "&:hover": {
                  background: "#ffe8d4",
                  transition: 0.3,
                },
              }}
            >
              CONNECT WALLET
            </Button>
          ) : (
            <ProfileMenuBar
              setProfileMenuOpen={setProfileMenuOpen}
              profileMenuOpen={profileMenuOpen}
              open={open}
              account={account}
              deactivate={deactivate}
              setWalletAddress={setWalletAddress}
              walletAddress={walletAddress}
            />
          )}
        </Box>
        <Box
          component={"img"}
          src={menuIcon}
          alt=""
          onClick={() => setMenuOpen(!menuOpen)}
          display={{ md: "none", sm: "block" }}
        />
      </Box>
      {menuOpen === true && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: palette.common.black,
            zIndex: 1000,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
              height: "100%",
            }}
          >
            <Box display={"flex"} justifyContent={"end"} p={4}>
              <Box
                onClick={() => setMenuOpen(false)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <CloseIcon sx={{ color: palette.common.white }} />
              </Box>
            </Box>
            <Box>
              {navbars.map((item, i) =>
                item.name === "WHITEPAPER" ? (
                  <Link
                    key={i}
                    variant="h5"
                    px={4}
                    py={{ sm: 4, xs: 3 }}
                    target={item.name === "WHITEPAPER" ? "_blank" : "_self"}
                    href={item.url}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #202025",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={
                        i === 0 && {
                          background:
                            "conic-gradient(from 180deg at 50% 50%, #5FFF5C -18.66deg, #FFE249 22.23deg, #F35950 78.14deg, #7C5BFF 159deg, #1CE4FF 202.32deg, #5FFF5C 341.34deg, #FFE249 382.23deg)",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                        }
                      }
                    >
                      {item.name}
                    </Typography>
                    <ArrowForwardIcon sx={{ color: "#555555" }} />
                  </Link>
                ) : (
                  <Link
                    key={i}
                    variant="h5"
                    px={4}
                    py={{ sm: 4, xs: 3 }}
                    onClick={() => {
                      navigate(item.name === "FAQ" ? "/FAQ" : "#buy$ART");
                      setMenuOpen(false);
                    }}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #202025",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={
                        i === 0 && {
                          background:
                            "conic-gradient(from 180deg at 50% 50%, #5FFF5C -18.66deg, #FFE249 22.23deg, #F35950 78.14deg, #7C5BFF 159deg, #1CE4FF 202.32deg, #5FFF5C 341.34deg, #FFE249 382.23deg)",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                        }
                      }
                    >
                      {item.name}
                    </Typography>
                    <ArrowForwardIcon sx={{ color: "#555555" }} />
                  </Link>
                )
              )}
            </Box>
            <Box display={"flex"} justifyContent={"center"} p={4}>
              {walletAddress === "undefined" ? (
                <Button
                  variant="h5"
                  onClick={() => {
                    setOpenModal(true);
                    setMenuOpen(false);
                  }}
                  sx={{
                    width: "100%",
                    background: "white",
                    color: "black",
                    border: "2px solid #555555",
                    borderRadius: "4px",
                    padding: "12px 32px",
                    fontWeight: 600,
                  }}
                >
                  CONNECT WALLET
                </Button>
              ) : (
                <ProfileMenuBar
                  setProfileMenuOpen={setProfileMenuOpen}
                  profileMenuOpen={profileMenuOpen}
                  open={open}
                  account={account}
                  deactivate={deactivate}
                  setWalletAddress={setWalletAddress}
                  walletAddress={walletAddress}
                />
              )}
            </Box>
          </Box>
        </Box>
      )}

      <WalletConnectModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        setClickStatus={setClickStatus}
      />
    </Box>
  );
};
