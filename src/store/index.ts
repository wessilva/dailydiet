import { configureStore } from '@reduxjs/toolkit';
import dietReducer from './slice/dietSlice';

export const store = configureStore({
    reducer: {
        diet: dietReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;