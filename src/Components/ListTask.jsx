// ListTask.js
import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

const ListTask = ({ tasks, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

export default connect(mapStateToProps)(ListTask);
