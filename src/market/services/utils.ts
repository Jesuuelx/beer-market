import { GroupedItems, Item, Orders } from "../interface/orders";

export function groupItemsByPaidStatus(data: Orders[]): GroupedItems {
  const group = (isPaid: boolean) =>
    data
      .filter((order) => order.paid === isPaid)
      .flatMap((order) => order.rounds.flatMap((round) => round.items))
      .reduce<Record<string, Item>>((acc, item) => {
        const key = item.name;
        if (!acc[key]) {
          acc[key] = { ...item };
        } else {
          acc[key].quantity += item.quantity;
        }
        return acc;
      }, {});

  return {
    paid: Object.values(group(true)),
    unpaid: Object.values(group(false)),
  };
}
