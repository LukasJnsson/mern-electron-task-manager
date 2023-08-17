
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from '../hooks/useTitle';
import { fetchTasks } from '../features/tasks/tasks.feature.js';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import TaskCalendar from '../components/Task/TaskCalendar/TaskCalendar';
import TaskTable from '../components/Task/TaskTable/TaskTable';
import TaskNotFound from '../components/Task/TaskNotFound/TaskNotFound';


export default function Calendar() {
  useTitle('Calendar');

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const { calanderDate } = useSelector((state) => state.dates);
  const { day, month, year } = calanderDate;
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    user?._id && dispatch(fetchTasks(user._id));
  }, [dispatch, user._id]);

  return (
    <>
    {tasks && (
      <AuthenticatedLayout>
       <div className='outer-calendar-container'>
         <div className='inner-left-calendar-container'>
           <TaskCalendar />
         </div>
         <div className='inner-right-calendar-container'>
          {tasks.length > 0 ? <TaskTable tasks={tasks} year={year} month={month} day={day} /> : <TaskNotFound />}
         </div>
       </div>
      </AuthenticatedLayout>
    )}
    </>
  );
};