import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#922a8d",
    second: "#252a2b",
    third: "#333",
    text: "#a8aeba",
    cherry: "#ba0001",
    vendor: "#9a9a9a",
    grey: "#ededed",
  },
  fonts: {
    body: `'Quicksand', sans-serif`,
  },

  styles: {
    body: {
      a: {
        listStyleType: "none",
      },
    },
    global: {},
  },
});

export default theme;
