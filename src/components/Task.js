import React from 'react';

function Task({ id, text, category, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete prop function, if provided
    onDelete?.(id); // Use optional chaining to handle cases where onDelete is not a function
  };

  return (
    <div className="task">
      <div className="text">{text}</div>
      <div className="category">{category}</div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;
