import { Box, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

export const OrderCard = () => {
  return (
    <Box h="400px" w="400px" borderRadius="10px" border="1px">
      <Stat>
        <StatLabel>Total Price</StatLabel>
        <StatNumber>HKD25.00</StatNumber>
      </Stat>
    </Box>
  );
};
