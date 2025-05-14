import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DietState {
    meals: string[];
}

const initialState: DietState = {
    meals: [],
};

const dietSlice = createSlice({
    name: 'diet',
    initialState,
    reducers: {
        addMeal(state, action: PayloadAction<string>) {
            state.meals.push(action.payload);
        },
        removeMeal(state, action: PayloadAction<number>) {
            state.meals.splice(action.payload, 1);
        },
    },
});

export const { addMeal, removeMeal } = dietSlice.actions;
export default dietSlice.reducer;