import { createSlice } from "@reduxjs/toolkit";

export type Task = {
   name: string;
   isDone: boolean;
};

export type InitialState = {
   tasks: Task[];
};

const initialState: InitialState = {
   tasks: [],
};

const taskSlice = createSlice({
   name: "Tasks",
   initialState,
   reducers: {
      addTask(state, { payload }: { payload: Task }) {
         const { name } = payload;
         const newTask: Task = {
            name,
            isDone: false,
         };

         return {
            ...state,
            tasks: [newTask, ...state.tasks],
         };
      },
   },
});

export const { addTask } = taskSlice.actions;
export default taskSlice;
