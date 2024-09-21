import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import AppRouter from "./config/React-Router-Domm.tsx";
import { ThemeConfig } from "./config/chakra-theme.ts";
import "./assets/css/fonts.css";
import "./assets/css/scrollbar.css";
import ModalPostProvider from "./context/Modal-Post-Context.tsx";
import EditProfileProvider from "./context/Modal-Edit-Profile.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={ThemeConfig}>
      <ModalPostProvider stateClosure={useDisclosure()}>
        <EditProfileProvider stateClosure={useDisclosure()}>
          <AppRouter></AppRouter>
        </EditProfileProvider>
      </ModalPostProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
