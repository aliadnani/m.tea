import { ActionIcon, Group, Input, List, Title } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import ItemCard from "../../../item-card";
import ItemSearch from "../../../search/index";
import { Delete } from "react-feather";

export const ProductSelection = () => {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  return <h1>Hi!</h1>
    // <Group direction="column" align="center">
    //   <Title order={1}>I want to order a:</Title>
    //   <Input
    //     style={{ textAlign: "center" }}
    //     size="lg"
    //     placeholder="bubble tea?"
    //     value={selectedItem || search}
    //     rightSection={
    //       search || selectedItem ? (
    //         <ActionIcon
    //           onClick={() => {
    //             setSearch("");
    //             setSelectedItem("");
    //           }}
    //         >
    //           <Delete />
    //         </ActionIcon>
    //       ) : undefined
    //     }
    //     onChange={
    //       selectedItem
    //         ? undefined : ((e: ChangeEvent<HTMLInputElement>) => {
    //             setSearch(e.target.value);
    //           })
    //     }
    //   />
    //   <List listStyleType="none">
    //     {ItemSearch(search).map((item) => {
    //       return (
    //         <List.Item style={{ margin: "10px" }}>
    //           <ItemCard
    //             onClick={() => {
    //               console.log(item.name);
    //               setSelectedItem(item.name);
    //               setSearch("");
    //             }}
    //             key={item.name}
    //             name={item.name}
    //             category={item.category}
    //             description={item.description}
    //             price={item.price}
    //           />
    //         </List.Item>
    //       );
    //     })}
    //   </List>
    // </Group>
  // );
};
