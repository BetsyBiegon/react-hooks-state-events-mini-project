// CategoryFilter.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("renders category filter without crashing", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  const filterElement = screen.getByText("Category filters");
  expect(filterElement).toBeInTheDocument();
});
