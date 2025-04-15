import { render, screen } from "@testing-library/react";
import MainPage from "./page";

vi.mock("@/market/services/services", () => ({
  getItems: () => {
    return [
      {
        id: 1,
        name: "Beer 1",
        price: 1,
        image: "/images/beer1.jpg",
        path: "/dashboard/detail",
        rating: 4.5,
        quantity: 10,
      },
      {
        id: 2,
        name: "Beer 2",
        price: 2,
        image: "/images/beer2.jpg",
        path: "/dashboard/detail",
        rating: 3.5,
        quantity: 10,
      },
    ];
  },
}));

describe("<MainPage />", () => {
  const makeWrapper = async () => {
    return render(await MainPage());
  };
  it("should render the MainPage component", async () => {
    await makeWrapper();
    expect(screen.getAllByAltText("Beer 1")[0]).toBeDefined();
  });
});
