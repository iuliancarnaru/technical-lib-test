import { render } from "@testing-library/react";
import useFetchData from "../../utils/useFetchData";
import TileList from "./TileList";

jest.mock("../../utils/useFetchData");

describe("TileList component", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("displays loading message before data is returned'", async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      loading: true,
      error: false,
      tiles: [],
      hasMore: true,
    });

    const { getByText } = render(<TileList />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("displays returned tiles on successful fetch'", async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      tiles: [
        {
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
      ],
      hasMore: true,
    });

    const { getByText } = render(<TileList />);
    expect(getByText("Dusty Thompson")).toBeInTheDocument();
  });

  it("displays returned tiles on successful fetch'", async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      loading: false,
      error: true,
      tiles: [],
      hasMore: true,
    });

    const { getByText } = render(<TileList />);
    expect(
      getByText("Ups something went wrong, please try again")
    ).toBeInTheDocument();
  });
});
