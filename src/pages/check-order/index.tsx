import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { Delete } from "react-feather";
import shallow from "zustand/shallow";
import { OrderCard } from "../../components/order-card";
import { AppState, useStore } from "../../store";

export const CheckOrderPage = () => {

  return (
    <OrderCard></OrderCard>

  );
};
