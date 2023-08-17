
import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settings/settings.feature.js";
import tasksReducer from "../features/tasks/tasks.feature.js";
import datesReducer from "../features/dates/dates.feature.js";
import authReducer from "../features/auth/auth.feature.js";


export default configureStore({
    reducer: {
        settings: settingsReducer,
        auth: authReducer,
        tasks: tasksReducer,
        dates: datesReducer
    }
});