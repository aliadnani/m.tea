import {
  Button,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Order, OrderItem } from "../../../../api/interfaces";
import { PlaceOrder } from "../../../../api/index";
import { useStore } from "../../../../store";

export const TagSelection = () => {
  const [confirm, setConfirm] = useState(false);
  const [temp, setTemp] = useState("hot");
  const [sugarLevel, setSugarLevel] = useState(75);
  const [iceLevel, setIceLevel] = useState(66.7);
  const orderItem = useStore((state) => state.order);
  const setModifiers = useStore((state) => state.setModifers);

  return (
    <Flex flexDirection="column" align="center">
      <Flex direction="row">
        <Button
          colorScheme="red"
          variant={temp === "hot" ? "outline" : "ghost"}
          onClick={() => {
            setTemp("hot");
          }}
          m={2}
        >
          Hot
        </Button>
        <Button
          colorScheme="cyan"
          variant={temp === "cold" ? "outline" : "ghost"}
          onClick={() => {
            setTemp("cold");
          }}
          m={2}
        >
          Cold
        </Button>
      </Flex>
      <Text fontSize="xl">Sugar</Text>
      <Slider
        value={sugarLevel}
        aria-label="slider-ex-6"
        onChange={(val) => setSugarLevel(val)}
        step={25}
      >
        <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
          0
        </SliderMark>
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          1/4
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          1/2
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          3/4
        </SliderMark>
        <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
          1/1
        </SliderMark>

        <SliderTrack bg="teal.50">
          <SliderFilledTrack bg="teal.300" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <br></br>
      <br></br>
      <Text fontSize="xl">Ice</Text>
      <Slider
        value={iceLevel}
        aria-label="slider-ex-6"
        onChange={(val) => setIceLevel(val)}
        step={33.33}
      >
        <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
          0
        </SliderMark>
        <SliderMark value={33.3} mt="1" ml="-2.5" fontSize="sm">
          1/3
        </SliderMark>
        <SliderMark value={66.6} mt="1" ml="-2.5" fontSize="sm">
          2/3
        </SliderMark>
        <SliderMark value={100} mt="1" ml="-2.5" fontSize="sm">
          1
        </SliderMark>

        <SliderTrack bg="gray.50">
          <SliderFilledTrack bg="gray.400" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <br></br>
      <br></br>
      <Button
        variant={confirm ? "outline" : "solid"}
        onClick={
          confirm
            ? () => {
                PlaceOrder(orderItem as Order);
              }
            : () => {
                setModifiers({
                  ice: `${iceLevel}%`,
                  sugar: `${sugarLevel}%`,
                });
                setConfirm(true);
              }
        }
      >
        {confirm ? "Place Order!" : "Confirm?"}
      </Button>
    </Flex>
  );
};
