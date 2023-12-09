// AddTask.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      addTask({ description, isDone: false });
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default connect(null, { addTask })(AddTask);
