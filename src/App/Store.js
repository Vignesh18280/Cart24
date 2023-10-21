import { configureStore } from "@reduxjs/toolkit";
import ProjectsSlics from "../Features/ProjectsSlics";
import CartSlice from "../Features/CartSlice";

export const store = configureStore({
    reducer : {
        ProjectsSlics : ProjectsSlics,
        CartSlice : CartSlice
    }
})
