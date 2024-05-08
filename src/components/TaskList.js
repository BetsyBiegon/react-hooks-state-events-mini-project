// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          id={index} // Pass an id prop to uniquely identify each task
          text={task.text}
          category={task.category}
          onDelete={onDeleteTask} // Pass the onDeleteTask function directly
        />
      ))}
    </div>
  );
}

export default TaskList;
