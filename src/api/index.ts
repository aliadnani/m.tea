import { Order } from "./interfaces";

const apiUrl = "http://localhost:3222";

export const PlaceOrder = async (order: Order): Promise<Order> => {
  const response = await fetch(`${apiUrl}/order`, {
    method: "POST",
    body: JSON.stringify(order),
  });
  return response.json();
};
