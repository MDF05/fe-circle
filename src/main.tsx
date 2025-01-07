import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./config/React-Router-Domm.tsx";
import { ThemeConfig } from "./config/chakra-theme.ts";
import { Provider } from "react-redux";
import "./assets/css/fonts.css";
import "./assets/css/scrollbar.css";
import { store } from "./stores/store.ts";
import "../src/lib/api-v1.ts";
import { ToastContainer } from "react-toastify";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={ThemeConfig}>
        <ToastContainer position="top-center" autoClose={2000} draggable style={{ width: "80%" }} />
        <AppRouter></AppRouter>
      </ChakraProvider>
    </Provider>
    ,
  </React.StrictMode>,
);
