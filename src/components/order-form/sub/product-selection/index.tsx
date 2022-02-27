import { ChangeEvent, useState } from "react";
import ItemCard from "../../../item-card";
import ItemSearch from "../../../search/index";
import { Delete } from "react-feather";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useStore, AppState } from "../../../../store";
import shallow from "zustand/shallow";

export const ProductSelection = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem, clearSelectedItem] = useStore(
    (state: AppState) => [
      state.order.name,
      state.setOrderItem,
      state.clearOrderItem,
    ],
    shallow
  );
  const [temp, setTemp] = useState("hot");
  return (
    <Flex flexDirection="column" align="center">
      <Heading>I want to order a:</Heading>
      <InputGroup w={{ sm: "80%", md: "340px" }}>
        <Input
          style={{ textAlign: "center" }}
          size="lg"
          placeholder="bubble tea?"
          variant="flushed"
          value={selectedItem || search}
          onChange={
            selectedItem
              ? undefined
              : (e: ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                }
          }
        />
        <InputRightElement>
          <IconButton
            onClick={() => {
              setSearch("");
              clearSelectedItem();
            }}
            aria-label="clear item"
            icon={<Delete />}
            variant="ghost"
          />
        </InputRightElement>
      </InputGroup>
      {search && (
        <UnorderedList styleType="none" maxH="60vh" overflowY="auto">
          <br></br>
          {ItemSearch(search).map((item) => {
            return (
              <ListItem>
                <ItemCard
                  name={item.name}
                  category={item.category}
                  description={item.description}
                  price={25}
                  onClick={() => {
                    console.log(item.name);
                    setSelectedItem(item);
                    setSearch("");
                  }}
                />
              </ListItem>
            );
          })}
        </UnorderedList>
      )}
    </Flex>
  );
};
