import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : false,
}
const CourseFilterMenuSlice = createSlice({
    name:"CourseFilterMenu",
    initialState,
    reducers: {
        ToggleCourseFilter(state){
            state.value = !state.value;
        }
    }
})

export const {ToggleCourseFilter} = CourseFilterMenuSlice.actions;
export default CourseFilterMenuSlice.reducer;