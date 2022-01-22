import { render } from "@testing-library/react";
import Library from "./Library";

describe("Library component", () => {
  it("should render correctly", () => {
    const { debug } = render(<Library />);
  });
});
