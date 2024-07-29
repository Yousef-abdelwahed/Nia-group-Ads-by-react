import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import "./location/i18n.ts";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
