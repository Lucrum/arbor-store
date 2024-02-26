import { render, screen } from "@testing-library/react";
import App from "../src/pages/App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("renders navbar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      "Arbor."
    );
  });
  it("renders dog hero", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("img", { name: "Cute dog by Alvan Nee" }));
  });
});
