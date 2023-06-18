import { ThemeProvider, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

import theme from "./themes";

import { AppProvider } from "./context/AppContext";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { FAQ } from "./pages/FAQ";

import "./App.css";

import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
}

function App() {
  return (
    <Box
      sx={{
        background: "#F7FBFA",
      }}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Homepage />} />
                  <Route exact path="/FAQ" element={<FAQ />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </AppProvider>
        </ThemeProvider>
      </Web3ReactProvider>
    </Box>
  );
}

export default App;
