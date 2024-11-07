import React from "react";

export default function Title({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center md:gap-5 gap-3 md:pb-24 md:pt-32 py-10">
      <div className="md:h-1 h-[2px] rounded-full md:w-[20vw] w-[10vw] bg-foreground" />
      <h1 className="md:text-5xl text-2xl font-bold uppercase font-montserrat">
        {title}
      </h1>
      <div className="md:h-1 h-[2px] rounded-full md:w-[20vw] w-[10vw] bg-foreground" />
    </div>
  );
}
