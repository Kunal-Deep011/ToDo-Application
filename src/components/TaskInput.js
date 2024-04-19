import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask({ id: Date.now(), text: task }));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} placeholder="Add new task..." />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
