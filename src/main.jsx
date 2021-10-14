import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import "@fontsource/archivo";
import "@fontsource/manrope";

import App from "./App";

const theme = extendTheme({
  fonts: {
    heading: "Manrope",
    body: "Archivo",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 800,
        letterSpacing: "tighter",
      },
    },
  },
  global: {
    body: {
      lineHeight: "base",
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
      letterSpacing: "tigher",
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
