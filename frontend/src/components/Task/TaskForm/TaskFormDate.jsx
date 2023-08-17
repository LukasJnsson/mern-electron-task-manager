
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import serializeDatePayload from '../../../utils/serialization/serializeDatePayload.util.js';
import { setTaskDate } from '../../../features/dates/dates.feature';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function TaskFormDate() {

  const dispatch = useDispatch();
  const { taskDate } = useSelector((state) => state.dates);
  const { day, month, year } = taskDate;

  /**
   * Function that handle date change by setting the selected date to the state
   * @param {Object} date - The dayjs object
   */
  const handleDateChange = date => {
    dispatch(setTaskDate(serializeDatePayload(date)));
  };

  return (
    <LocalizationProvider className='inner-task-form-date' dateAdapter={AdapterDayjs}>
        <MobileDatePicker displayWeekNumber value={dayjs().date(day).month(month).year(year)} 
        onChange={handleDateChange} />
    </LocalizationProvider>
  );
};