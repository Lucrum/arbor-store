import { render, screen } from "@testing-library/react";
import Shop from "../src/pages/Shop";
import { MemoryRouter } from "react-router-dom";

describe("Shop", () => {
  it("renders navbar", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      "Arbor."
    );
  });
  it("renders shop page best seller title", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 2 }).textContent).toMatch(
      "Best Sellers"
    );
  });
});
