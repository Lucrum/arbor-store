import { render, screen } from "@testing-library/react";
import Counter from "../src/components/shop/Counter";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("should render a button with the text 'Add to Cart'", () => {
    const onClick = vi.fn();
    render(<Counter id={1} addToCart={onClick} />);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    expect(button).toBeInTheDocument();
  });

  it("should allow amount to be incremented", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Counter id={1} addToCart={onClick} />);
    const plusButton = screen.getByRole("button", { name: "+" });
    const minusButton = screen.getByRole("button", { name: "-" });
    const amount = screen.getByRole("textbox", { id: "amount" });
    await user.click(plusButton);
    expect(amount.value).toMatch("2");
  });

  it("should allow amount to be decremented, but not below zero", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Counter id={1} addToCart={onClick} />);
    const plusButton = screen.getByRole("button", { name: "+" });
    const minusButton = screen.getByRole("button", { name: "-" });
    const amount = screen.getByRole("textbox", { id: "amount" });
    await user.click(plusButton);
    await user.click(minusButton);
    expect(amount.value).toMatch("1");
    await user.click(minusButton);
    await user.click(minusButton);
    expect(amount.value).toMatch("0");
  });

  it("should not allow the user to enter a number higher than 500", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Counter id={1} addToCart={onClick} />);
    const amount = screen.getByRole("textbox", { id: "amount" });
    await user.click(amount);
    await user.keyboard("9999");
    expect(amount.value).toMatch("500");
  });

  it("should call the addToCart function when clicked with the item id", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Counter id={1} addToCart={onClick} />);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    const plusButton = screen.getByRole("button", { name: "+" });
    await user.click(plusButton);
    await user.click(button);
    expect(onClick).toHaveBeenCalledWith(1, 2);
  });
});
