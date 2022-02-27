import {
  Badge,
  Text,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
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
    <Center py={1} onClick={props.onClick}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "80%", md: "540px" }}
        direction="row"
        bg={useColorModeValue("white", "gray.900")}
        padding={4}
      >
        <Image boxSize={[100, 120, 200]} src={logo} />
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} textAlign="left">
            {props.name}
          </Heading>
          <Text
            textAlign="left"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {props.description}
          </Text>
          <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              {props.category}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              ${props.price}
            </Badge>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ItemCard;
