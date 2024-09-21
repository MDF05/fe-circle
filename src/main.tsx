import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./config/React-Router-Domm.tsx";
import { ThemeConfig } from "./config/chakra-theme.ts";
import { Provider } from "react-redux";
import "./assets/css/fonts.css";
import "./assets/css/scrollbar.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={{}}>
      <ChakraProvider theme={ThemeConfig}>
        <AppRouter></AppRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
