
import { ChangeEvent } from "react";
import logo from "./placeholder.png";

interface Props {
  name: string;
  category: string;
  description: string;
  price: number;
  onClick: () => void;
}
const ItemCard = (props: Props) => {

  return (
    <div style={{ width: 400, margin: "auto" }} onClick={props.onClick}>
      <h1>Hi!</h1>
      {/* <Paper style={{ display: "flex", flexDirection: "row" }} withBorder  padding="md" shadow="sm">
        <Image src={logo} height={150} width={150} alt="Product" />
        <Group spacing="xs">
          <Text weight={500}>{props.name}</Text>
          <Group position="center" spacing="xs">
            <Badge color="blue" variant="light">
              ${props.price}
            </Badge>
            <Badge color="green" variant="light">
              {props.category}
            </Badge>
          </Group>
          <Text
            size="sm"
            style={{
              color: secondaryColor,
              lineHeight: 1.2,
              textAlign: "left",
            }}
          >
            {props.description}
          </Text>
        </Group>
      </Paper> */}
    </div>
  );
};

export default ItemCard;
