import { MantineProvider, TypographyStylesProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom";
import { OrderItemPage } from "./pages/order-item";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./pages/main";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
