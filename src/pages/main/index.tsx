import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { OrderItemPage } from "../order-item";
import { CheckOrderPage } from "../check-order";
import { Tabs, TabList, Tab, Center, Stack } from "@chakra-ui/react";

export const Main = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  return (
    <Center h={"100vh"}>
      <Stack direction="column">
        <Tabs
          index={pathname === "/order-item" ? 0 : 1}
          w={[250, null, 400, null, null]}
          alignSelf="center"
          isFitted
          align="center"
        >
          <TabList>
            <Tab
              onClick={() => {
                navigate("/order-item");
              }}
            >
              Order Item
            </Tab>
            <Tab onClick={() => {
                navigate("/check-order");
              }}>Check Order</Tab>
          </TabList>
        </Tabs>
        <br></br>
        <Routes>
          <Route path="/order-item" element={<OrderItemPage />} />
          <Route path="/check-order" element={<CheckOrderPage />} />
          <Route path="/" element={<Navigate replace to="/order-item" />} />
        </Routes>
      </Stack>
    </Center>
  );
};
