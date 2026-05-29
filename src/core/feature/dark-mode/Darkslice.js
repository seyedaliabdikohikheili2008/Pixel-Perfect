import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : localStorage.getItem('theme') || "light",
}
const DarkSlice = createSlice({
    name:"DarkFlag",
    initialState,
    reducers: {
        reverseDarkValue(state){
            state.value = state.value === 'light' ? 'dark' : 'light';
        }
    }
})

export const {reverseDarkValue} = DarkSlice.actions;
export default DarkSlice.reducer;