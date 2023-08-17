
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../../../features/tasks/tasks.feature';
import IconButton from '@mui/joy/IconButton';
import DoneIcon from '@mui/icons-material/Done';


export default function TaskStatus(props) {

  const { _id, completed } = props;
  const dispatch = useDispatch();

  /**
   * Function that handle the completion of a task by dispatching the async thunk
   */
  const handleCompletion = () => {
    const completionStatus = completed ? false : true;
    const task = {
      _id: _id,
      completed: completionStatus
    };
    dispatch(updateTask(task));
  };

  return (
    <IconButton className='inner-task-status-button' variant="solid" onClick={handleCompletion}>
        {completed && <DoneIcon />}
    </IconButton>
  );
};