import { render, fireEvent, waitFor } from "@testing-library/react";
import Tile from "./Tile";

const mockProps = {
  id: "1",
  ref: null,
  tile: {
    duration: 28.283098293468356,
    email: "Hyman.DuBuque@Grady.co.uk",
    firstName: "Dusty",
    imageUrl:
      "https://images.pexels.com/photos/8422306/pexels-photo-8422306.jpeg",
    lastName: "Thompson",
    likes: 86,
    thumbnailUrl:
      "https://images.pexels.com/photos/6849263/pexels-photo-6849263.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
};

describe("Tile component", () => {
  it("should render correctly", () => {
    const { getByRole, getByText } = render(<Tile {...mockProps} />);

    expect(getByRole("img")).toBeInTheDocument();
    expect(getByText("0:28")).toBeInTheDocument();
    expect(getByText("86 ❤️")).toBeInTheDocument();
    expect(getByText("Dusty Thompson")).toBeInTheDocument();
  });

  it("should show Modal component when you click on the tile", async () => {
    const { getByRole, getByText } = render(<Tile {...mockProps} />);
    const handleModalVisibility = jest.fn();

    const tile = getByRole("img");
    fireEvent.click(tile);
    await waitFor(() => expect(handleModalVisibility).toHaveBeenCalledTimes(1));
  });
});
