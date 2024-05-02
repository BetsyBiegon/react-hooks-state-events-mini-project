import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm"; // Change the import
import { CATEGORIES } from "../data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} /> // Render NewTaskForm directly
  );

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByText(/Add task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn(); // Mocking the form submission
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} /> // Render NewTaskForm directly
  );

  const codeCount = screen.queryAllByText(/Code/).length;

  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByText(/Add task/));

  expect(screen.queryByText(/Pass the tests/)).toBeInTheDocument();

  expect(screen.queryAllByText(/Code/).length).toBe(codeCount + 1);
});
