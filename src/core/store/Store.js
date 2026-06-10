import { configureStore } from "@reduxjs/toolkit";
import DarkFlag from "../feature/dark-mode/Darkslice"
import CourseFilterMenu from "../feature/courses/CoursesFilterMenu";
import isAuth from "../feature/auth/IsAuthSlice";
import RegisterStep from "../feature/auth/RegisterStepSlice"
import ResetPasswordStep from "../feature/auth/ResetPasswordStepSlice"

export const store = configureStore({
    reducer:{
        DarkFlag : DarkFlag,
        CourseFilterMenu: CourseFilterMenu,
        isAuth: isAuth,
        RegisterStep:RegisterStep,
        ResetPasswordStep:ResetPasswordStep,
    },
});