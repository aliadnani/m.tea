import produce from "immer";
import create from "zustand";
import { OrderItem } from "../api/interfaces";

export interface AppState {
  order: {
    name?: string;
    price?: number;
    modifiers?: { [modifier: string]: string };
  };
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
