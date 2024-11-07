"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skills from "./Skills";
import About from "./About";
import Education from "./Education";
import Title from "@/components/Title";

export default function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col sm:justify-center items-center pb-24 "
    >
      <div className=" xl:w-[60%] w-[90%] ">
        <Tabs
          defaultValue="About"
          className=" w-full flex flex-col sm:flex-row justify-center gap-16 sm:gap-0"
        >
          <TabsList className="flex flex-col sm:w-1/3 sm:px-10  w-full mx-auto sm:gap-3 gap-2 mt-10 sm:mt-0  justify-start text-sm ">
            <TabsTrigger className="bg-foreground/10" value="About">
              About me
            </TabsTrigger>
            <TabsTrigger className="bg-foreground/10" value="Skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="bg-foreground/10" value="Education">
              Education
            </TabsTrigger>
          </TabsList>
          <div className="sm:h-full sm:w-2/3 w-full pb-10 sm:pb-0">
            <div className=" h-full w-full ">
              <About />
              <Skills />
              <Education />
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
