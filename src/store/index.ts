import produce from "immer";
import create from "zustand";
import { Order, OrderItem } from "../api/interfaces";

export interface AppState {
  order: Order;
  orderToCheck?: Order;
  setOrderItem: (orderItem: OrderItem) => void;
  clearOrderItem: () => void;
  setModifers: (modifiers: { [modifier: string]: string }) => void;
}

export const useStore = create<AppState>((set) => ({
  order: {
    name: undefined,
    price: undefined,
    modifiers: undefined,
  },
  orderToCheck: {
    id: "AS124BA9",
    name: "Black Tea",
    modifiers: { ice: "12%", sugar: "12%" },
  },
  setOrderItem: (orderItem) =>
    set(
      produce((state: AppState) => {
        state.order.name = orderItem.name;
        state.order.price = orderItem.price;
      })
    ),
  clearOrderItem: () =>
    set(
      produce((state: AppState) => {
        state.order.name = undefined;
        state.order.price = undefined;
      })
    ),
  setModifers: (modifiers) =>
    set(
      produce((state: AppState) => {
        state.order.modifiers = modifiers;
      })
    ),
}));
