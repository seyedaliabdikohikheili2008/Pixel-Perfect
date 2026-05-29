import { configureStore } from "@reduxjs/toolkit";
import DarkFlag from "../feature/dark-mode/Darkslice"

export const store = configureStore({
    reducer:{
        DarkFlag : DarkFlag,
    },
});