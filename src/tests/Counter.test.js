import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const countValue = screen.getByTestId("count");
  expect(countValue).toBeInTheDocument();
  expect(countValue.textContent).toBe("0");
});

test("clicking + increments the count", () => {
  const countValue = screen.getByTestId("count");
  expect(countValue).toBeInTheDocument();
  expect(countValue.textContent).toBe("0");
  const plusButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(plusButton);
  expect(countValue).toBeInTheDocument();
  expect(countValue.textContent).toBe("1");
});

test("clicking - decrements the count", () => {
  const countValue = screen.getByTestId("count");
  expect(countValue).toBeInTheDocument();
  expect(countValue.textContent).toBe("0");
  const minusButton = screen.getByRole("button", { name: "-" });
  fireEvent.click(minusButton);
  expect(countValue).toBeInTheDocument();
  expect(countValue.textContent).toBe("-1");
});
