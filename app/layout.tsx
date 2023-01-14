"use client";
import { taskStore } from "@/stores/root";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
         <head />
         <body className="flex flex-col items-center justify-center w-full h-full bg-neutral-900">
            <Provider store={taskStore}>{children}</Provider>
         </body>
      </html>
   );
}
