import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

export const taskStore = configureStore({
   reducer: {
      tasks: taskSlice.reducer,
   },
});

export type TaskState = ReturnType<typeof taskStore.getState>;
