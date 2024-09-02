import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, router } from "./config/react-router-dom";
import { ThemeConfig } from "./config/chakra-theme.ts";
import "./assets/css/fonts.css";
import "./assets/css/scrollbar.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={ThemeConfig}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
