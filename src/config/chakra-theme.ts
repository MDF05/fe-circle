import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const BrandConfig: ThemeOverride = {
  colors: {
    brand: {
      color: "#04A51E",
      background: "#1D1D1D",
      backgroundYoung: "#262626",
      "background-disabled": "#005E0E",
    },
  },
  borders: {
    brand: {
      color: "#1D1D1D",
    }
  },
  fonts: {
    heading: `"Plus Jakarta Sans", sans-serif`,
    body: `"Plus Jakarta Sans", sans-serif`,
    mono: `"Plus Jakarta Sans", sans-serif`,
  },
};

export const ThemeConfig = extendTheme(BrandConfig satisfies ThemeOverride);