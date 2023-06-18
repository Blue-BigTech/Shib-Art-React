import { createTheme } from "@mui/material/styles";

const createTypographySystem = () => {
  return {
    h1: {
      color: "#3C2C2D",
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      lineHeight: "40px",
      color: "#202025",
      fontWeight: 700,
    },
    h3: {
      color: "#E1E2E2 !important",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: "32px",
    },
    h4: {
      fontSize: 16,
      lineHeight: 1,
      fontWeight: 700,
    },
    h5: {
      color: "#202025 !important",
      textDecoration: "none !important",
      fontSize: 12,
      fontWeight: 700,
    },
  };
};

const createPaletteSystem = () => ({
  common: {
    black: "#000",
    white: "#FFFFFF",
    brown: "#724c29",
  },
  primary: {
    dark: "#513F01 !important",
    light: "#CA9F02",
    main: "#31d0aa",
  },
  text: {
    disabled: "#353547",
    primary: "#b8add2",
    secondary: "#9a6aff",
  },
});
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          "&:before": {
            border: "1px solid rgba(0,0,0,0.2)",
          },
          color: "white",
        },
        tooltip: {
          backgroundColor: "white",
          border: "1px solid rgba(0,0,0,0.2)",
          borderRadius: "16px",
          margin: 0,
          marginBottom: "0px !important",
          marginTop: "0px !important",
          padding: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Inter",
        },
      },
    },
  },
  palette: createPaletteSystem(),
  spacing: 4,
  typography: createTypographySystem(),
});

export default theme;
export const palette = theme.palette;
