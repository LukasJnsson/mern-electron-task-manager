
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTitle from '../hooks/useTitle';
import { fetchUser } from '../features/auth/auth.feature';
import { fetchTasks } from '../features/tasks/tasks.feature.js';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import TabBar from '../components/Bars/TabBar';
import TaskForm from '../components/Task/TaskForm/TaskForm';
import TaskTable from '../components/Task/TaskTable/TaskTable';
import TaskNotFound from '../components/Task/TaskNotFound/TaskNotFound';


export default function Home() {
  useTitle('Home');

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const { homeTaskTabDate } = useSelector((state) => state.dates);
  const { year, month, day } = homeTaskTabDate;
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    user ?? dispatch(fetchUser());
    user?._id && dispatch(fetchTasks(user._id));
  }, [dispatch, user]);

  return (
    <>
    {tasks && (
      <AuthenticatedLayout>
        <div className='outer-home-container'>
          <div className='inner-top-home-container'>
            <TabBar />
            <TaskForm />
          </div>
          <div className='inner-bottom-home-container'>
            {tasks.length > 0 ? <TaskTable tasks={tasks} year={year} month={month} day={day} /> : <TaskNotFound />}
          </div>
        </div>
      </AuthenticatedLayout>
    )}
    </>
  );
};