import { fireEvent, render, waitFor } from "@testing-library/react";
import { ButtonBack } from "./ButtonBack";

const mockBack = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    back: mockBack,
  }),
}));

describe("<ButtonBack />", () => {
  const makeWrapper = () => {
    return render(<ButtonBack />);
  };

  it("should render the button", () => {
    const { getByRole } = makeWrapper();
    const button = getByRole("button");
    expect(button).toBeDefined();
  });
  it("should call router.back when clicked", async () => {
    const { getByRole } = makeWrapper();
    const button = getByRole("button");
    fireEvent.click(button);

    waitFor(() => {
      expect(mockBack).toHaveBeenCalled();
    });
  });
});
