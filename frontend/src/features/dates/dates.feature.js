
import { createSlice } from "@reduxjs/toolkit";
import dayjs from 'dayjs';


/**
 * Dates Slice
 */
export const datesSlice = createSlice({
    name: 'dates',
    initialState: {
        homeTaskTabDate: {
            selectedTab: 1,
            day: dayjs().$D,
            month: dayjs().$M,
            year: dayjs().$y
        },
        taskDate: {
            day: dayjs().$D,
            month: dayjs().$M,
            year: dayjs().$y
        },
        calanderDate: {
            day: dayjs().$D,
            month: dayjs().$M,
            year: dayjs().$y
        }
    },
    reducers: {
        setHomeTaskTabDate: (state, action) => {
            state.homeTaskTabDate.selectedTab = action.payload.selectedTab;
            state.homeTaskTabDate.day = action.payload.day;
            state.homeTaskTabDate.month = action.payload.month;
            state.homeTaskTabDate.year = action.payload.year;
        },
        setTaskDate: (state, action) => {
            const { day, month, year } = action.payload;
            state.taskDate.day = day;
            state.taskDate.month = month;
            state.taskDate.year = year;
        },
        setCalendarDate: (state, action) => {
            const { day, month, year } = action.payload;
            state.calanderDate.day = day;
            state.calanderDate.month = month;
            state.calanderDate.year = year;
        }
    }
});


export const { setHomeTaskTabDate, setTaskDate, setCalendarDate } = datesSlice.actions;
export default datesSlice.reducer;