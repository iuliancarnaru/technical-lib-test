import { render } from "@testing-library/react";
import LibraryHeader from "./LibraryHeader";

describe("LibraryHeader component", () => {
  it("should render correctly", () => {
    const { getByRole } = render(<LibraryHeader />);

    expect(getByRole("heading")).toHaveTextContent("Library");
  });
});
