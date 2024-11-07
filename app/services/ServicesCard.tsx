"use client";
import React from "react";
import { FaCaretDown } from "react-icons/fa6";
export default function ServicesCard({
  id,
  icon,
  title,
  description,
}: {
  id?: string;
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className=" cursor-pointer relative flex flex-col text-center group border-foreground/50 border bg-foreground/10 p-4 transition-all ease-in-out duration-500 ">
      <div className="h-0 overflow-hidden text-sm bg-foreground text-background px-2 flex justify-center items-center lg:group-hover:h-[45vh] group-hover:h-[30vh] duration-700 transition-all ease-in-out">
        {description}
      </div>
      <div className="flex h-[30vh] flex-col justify-evenly items-center gap-5 group-hover:h-0 overflow-hidden duration-700 transition-all ease-in-out">
        <span className="group-hover:text-foreground transition-all ease-in-out duration-300">
          <FaCaretDown size={15} />
        </span>
        <div className="text-6xl text-foreground">{icon}</div>
        <span className="">.</span>
      </div>
      <div className="flex flex-col my-5 gap-5">
        <h2 className="font-semibold uppercase">{title}</h2>
        <p className=" text-foreground/40 group-hover:text-foreground font-semibold">
          {id}
        </p>
      </div>

      <div className="h-[2px] w-1/6 bg-foreground/40 absolute left-1/2 -translate-x-1/2 -bottom-[1px] group-hover:w-1/3 group-hover:bg-foreground duration-500" />
    </div>
  );
}
