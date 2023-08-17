
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TaskStatus from './TaskStatus';


export default function TaskTable(props) {
  
  const { tasks, year, month, day } = props;

  /**
   * Function that returns the table columns
   * @returns {Array} - The table column objects
   */
  const getColumns = () => {
    return [
      { field: 'completed', headerName: 'Completed', width: '100',
        renderCell: (params) => <TaskStatus _id={params.row.id} completed={params.value} />,
      },
      { field: 'task', headerName: 'Task', width: '400'}
    ];
  };


  /**
   * Function that returns the tasks for the selected date
   * @param {Array} tasks - The array with the task objects
   * @param {Number} year - The year of the selected date
   * @param {Number} month - The month of the selected date
   * @param {Number} day - The day of the selected date
   * @returns {Array} - The filtered tasks
   */
  const getFilteredTasks = (tasks, year, month, day) => {
    return year ? tasks.filter((task) => `${task.dueDate.year}-${task.dueDate.month}-${task.dueDate.day}` === `${year}-${month}-${day}`) : tasks;
  };


  /**
   * Function that returns the table rows
   * @param {Array} tasks - The array with the task objects
   * @param {Number} year - The year of the selected date
   * @param {Number} month - The month of the selected date
   * @param {Number} day - The day of the selected date
   * @returns {Array} - The tasks for the selected date
   */
  const getTasks = (tasks, year, month, day) => {
    return getFilteredTasks(tasks, year, month, day).map((task) => ({
      id: task._id,
      completed: task.completed,
      task: task.task
    }));
  };


  /**
   * Function that set the initial pagination for the table
   * @returns {Object} - The pagination
   */
  const setInitialPagination = () => {
    return {
        pagination: {
            paginationModel: { page: 0, pageSize: 20 },
            },
    };
  };


  /**
   * Function that set the page size options
   * @returns {Array} - The page size options
   */
  const setPageSizeOptions = () => {
    return [10, 20, 40, 60, 80, 100];
  };

  return (
    <>
      <DataGrid className='inner-task-table' rows={getTasks(tasks, year, month, day)}
      columns={getColumns()} initialState={setInitialPagination()} 
      pageSizeOptions={setPageSizeOptions()} disableRowSelectionOnClick 
      />
    </>
  );
};