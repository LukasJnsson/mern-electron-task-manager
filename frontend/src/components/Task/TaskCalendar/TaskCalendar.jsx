
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import serializeDatePayload from '../../../utils/serialization/serializeDatePayload.util.js';
import { setCalendarDate } from '../../../features/dates/dates.feature';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function TaskCalendar() {

  const dispatch = useDispatch();
  const { calanderDate } = useSelector((state) => state.dates);
  const { day, month, year } = calanderDate;

  /**
   * Function that handle date change by setting the selected date to the state
   * @param {Object} date - The dayjs object
   */
  const handleDateChange = date => {
    dispatch(setCalendarDate(serializeDatePayload(date)));
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DateCalendar displayWeekNumber value={dayjs().date(day).month(month).year(year)}
        onChange={handleDateChange} />
      </LocalizationProvider>
    </>
  );
};