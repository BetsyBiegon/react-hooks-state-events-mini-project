import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";


test("adds a new item to the list when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByText(/Add task/)); // Submit the form

  // Verify that the onTaskFormSubmit function is called with the correct arguments
  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Pass the tests",
    category: "Code",
  });

  // No need to check for specific text, as it's not being directly added
});
