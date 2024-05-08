import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Task from '../components/Task';

// Import the jest-dom library for additional matchers
import '@testing-library/jest-dom/extend-expect';

describe('Task component', () => {
  test('is removed from the list when the delete button is clicked', () => {
    // Arrange
    const task = { id: 1, text: 'Buy rice', category: 'Groceries' };
    const mockOnDelete = jest.fn(); // Mock function for onDelete prop

    render(<Task {...task} onDelete={mockOnDelete} />);
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    // Act
    fireEvent.click(deleteButton);

    // Assert
    // Verify that the onDelete function is called
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(task.id); // Verify with specific argument
  });
});
