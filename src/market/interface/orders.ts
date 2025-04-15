export interface Orders {
  id: string;
  items: unknown[];
  created: Created;
  paid: boolean;
  subtotal: number;
  taxes: number;
  rounds: Round[];
}

export interface Created {
  seconds: number;
  nanoseconds: number;
}

export interface Round {
  created: Created;
  items: Item[];
}

export interface Item {
  quantity: number;
  name: string;
  image: string;
}

export interface GroupedItems {
  paid: Item[];
  unpaid: Item[];
}
