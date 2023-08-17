
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@mui/joy/Input';
import ListIcon from '@mui/icons-material/List';
import TaskFormDate from './TaskFormDate';
import { createTask } from '../../../features/tasks/tasks.feature.js';


export default function TaskFormInput() {

  const distpatch = useDispatch();
  const { taskDate } = useSelector((state) => state.dates);
  const { day, month, year } = taskDate;
  const { _id } = useSelector((state) => state.auth.user);

  /**
   * Function that handle the creation of a new task by dispatching the async thunk
   * @param {Event} event - The onKeyDown event that invoked the function
   */
  const handleCreateTask = event => {
    if (event.key === 'Enter') {
      const task = {
        userId: _id,
        task: event.target.value,
        dueDate: {
          day: day,
          month: month,
          year: year
        }
      };
      distpatch(createTask(task));
      event.target.value = null;
    };
  };

  return (
    <Input className='inner-task-form-input' placeholder='New task...' startDecorator={<ListIcon />} 
    color='' onKeyDown={handleCreateTask} endDecorator={<TaskFormDate />}
    />
  );
};