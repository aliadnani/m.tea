import { Center, Stack } from "@chakra-ui/react";
import { useStore } from "../../store";
import { ProductSelection } from "./sub/product-selection";
import { TagSelection } from "./sub/tag-selection";

export const OrderForm = () => {
  const orderItem = useStore((state) => state.order);
  return (
    <Stack direction="column">
      <ProductSelection />
      {orderItem.name && <TagSelection />}
    </Stack>
  );
};
