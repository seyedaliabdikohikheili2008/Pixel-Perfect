import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    step : 1,
}
const RegisterStepSlice = createSlice({
    name:"RegisterStep",
    initialState,
    reducers: {
        stepIncrement(state){
            state.step = state.step + 1;
        },
        stepDecrement(state){
            state.step = state.step - 1;
        },
        resetStep(state){
            state.step = 1;
        }
    }
})

export const {stepIncrement,stepDecrement,resetStep} = RegisterStepSlice.actions;
export default RegisterStepSlice.reducer;