// Task.js
import React from 'react';
import { connect } from 'react-redux';
import { editTask } from '../redux/actions';

const Task = ({ task, editTask }) => {
  const handleToggleDone = () => {
    editTask({ ...task, isDone: !task.isDone });
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggleDone} />
      <span>{task.description}</span>
    </div>
  );
};

export default connect(null, { editTask })(Task);
