import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const codeButton = screen.getByRole("button", { name: /Code/i }); // Use getByRole instead of queryByRole
  const allButton = screen.getByRole("button", { name: /All/i });

  fireEvent.click(codeButton);

  expect(codeButton.classList).toContain("selected");
  expect(allButton.classList).not.toContain("selected");
});

test("clicking the category button filters the task list", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const codeButton = screen.getByRole("button", { name: /Code/i });

  fireEvent.click(codeButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<CategoryFilter categories={CATEGORIES} />);

  const allButton = screen.getByRole("button", { name: /All/i });

  fireEvent.click(allButton);

  expect(screen.queryByText("Build a todo app")).toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).toBeInTheDocument();
});
