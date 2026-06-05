import { configureStore } from "@reduxjs/toolkit";
import DarkFlag from "../feature/dark-mode/Darkslice"
import CourseFilterMenu from "../feature/courses/CoursesFilterMenu";

export const store = configureStore({
    reducer:{
        DarkFlag : DarkFlag,
        CourseFilterMenu: CourseFilterMenu,
    },
});