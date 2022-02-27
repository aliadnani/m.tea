export interface OrderItem {
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface Order {
  id?: string;
  name?: string;
  price?: number;
  modifiers?: { [modifier: string]: string };
  status?: string;
}
