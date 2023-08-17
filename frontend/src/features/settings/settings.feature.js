
import { createSlice } from "@reduxjs/toolkit";


/**
 * Settings Slice
 */
export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        darkMode: true,
        displayInformation: false,
        displaySettings: false
    },
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        },
        setDisplayInformation: (state, action) => {
            state.displayInformation = action.payload;
        },
        setDisplaySettings: (state, action) => {
            state.displaySettings = action.payload;
        }
    }
});


export const { setDarkMode, setDisplayInformation, setDisplaySettings } = settingsSlice.actions;
export default settingsSlice.reducer;