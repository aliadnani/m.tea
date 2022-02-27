import { MantineProvider, TypographyStylesProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./pages/main";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
