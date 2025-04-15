import { Orders } from "../interface/orders";
import { groupItemsByPaidStatus } from "./utils";

describe("groupItemsByPaidStatus", () => {
  it("agrupa correctamente los items por estado de pago y suma las cantidades", () => {
    const mockData: Orders[] = [
      {
        paid: true,
        items: [],
        id: "1",
        created: { seconds: 1234567890, nanoseconds: 0 },
        subtotal: 100,
        taxes: 10,

        rounds: [
          {
            created: { seconds: 1234567890, nanoseconds: 0 },
            items: [
              { name: "Beer", quantity: 2, image: "image_url" },
              { name: "Burger", quantity: 1, image: "image_url" },
            ],
          },
          {
            created: { seconds: 1234567890, nanoseconds: 0 },
            items: [
              { name: "Beer", quantity: 1, image: "image_url" },
              { name: "Fries", quantity: 2, image: "image_url" },
            ],
          },
        ],
      },
      {
        paid: false,
        items: [],
        id: "1",
        created: { seconds: 1234567890, nanoseconds: 0 },
        subtotal: 100,
        taxes: 10,

        rounds: [
          {
            created: { seconds: 1234567890, nanoseconds: 0 },
            items: [
              { name: "Beer", quantity: 1, image: "image_url" },
              { name: "Burger", quantity: 2, image: "image_url" },
            ],
          },
        ],
      },
    ];

    const result = groupItemsByPaidStatus(mockData);

    expect(result.paid).toEqual([
      { name: "Beer", quantity: 3, image: "image_url" },
      { name: "Burger", quantity: 1, image: "image_url" },
      { name: "Fries", quantity: 2, image: "image_url" },
    ]);

    expect(result.unpaid).toEqual([
      { name: "Beer", quantity: 1, image: "image_url" },
      { name: "Burger", quantity: 2, image: "image_url" },
    ]);
  });

  it("devuelve listas vacías si no hay órdenes", () => {
    const result = groupItemsByPaidStatus([]);
    expect(result.paid).toEqual([]);
    expect(result.unpaid).toEqual([]);
  });
});
