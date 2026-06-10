import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    step : 1,
}
const ResetPasswordStepSlice = createSlice({
    name:"ResetPasswordStep",
    initialState,
    reducers: {
        resetStepIncrement(state){
            state.step = state.step + 1;
        },
        resetStepDecrement(state){
            state.step = state.step - 1;
        },
        resetStepReset(state){
            state.step = 1;
        }
    }
})

export const {resetStepIncrement,resetStepDecrement,resetStepReset} = ResetPasswordStepSlice.actions;
export default ResetPasswordStepSlice.reducer;