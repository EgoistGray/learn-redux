"use client";

import Card from "@/components/Card";
import { addTask } from "@/stores/taskSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskState } from "../stores/root";

export default function Home() {
   const [taskName, setName] = useState("");
   const { tasks } = useSelector((state: TaskState) => state.tasks);
   const dispatch = useDispatch();

   return (
      <main className="flex flex-col items-center w-full h-full mt-60 bg-neutral-900">
         <Link href="/about" className="mb-5 text-3xl">
            Sample Todolist
         </Link>
         <input
            type="text"
            value={taskName}
            className="w-full max-w-sm px-4 py-3 text-lg duration-100 ease-in border-b-2 rounded-md outline-none border-slate-500 focus:border-slate-300"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
               if (e.code === "Enter") {
                  dispatch(addTask({ name: taskName, isDone: false }));
                  setName("");
               }
            }}
         />

         <div id="card-containers" className="w-full max-w-sm">
            {tasks.map((newTask, index) => (
               <Card text={newTask.name} key={index} />
            ))}
         </div>
      </main>
   );
}
