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
    border: {
      grey: "1px solid grey",
    },
    profile: {
      rightSide: "5px solid rgb(38, 38, 38)",
      baseProfile: "5px solid rgb(29, 29, 29)",
    },
    active: {
      color: "5px solid #04A51E",
    },
    notActive: "5px solid transparent"
  },
  fonts: {
    heading: `"Plus Jakarta Sans", sans-serif`,
    body: `"Plus Jakarta Sans", sans-serif`,
    mono: `"Plus Jakarta Sans", sans-serif`,
  },
};

export const ThemeConfig = extendTheme(BrandConfig satisfies ThemeOverride);