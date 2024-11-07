import React from "react";
import { COURSES } from "./data";
import { TabsContent } from "@/components/ui/tabs";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Button from "@/components/Button";

export default function Courses() {
  return (
    <TabsContent value="Education">
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pb-10 ">
        <h1 className="md:text-3xl text-xl  font-bold">My Education</h1>
        <p className="text-foreground/60 ">
          My university major is Mechatronics Engineering, which helped me learn
          programming languages, problem-solving skills, and organizing my
          thoughts. However, as a web and mobile developer, I have relied
          heavily on self-learning and online courses.
        </p>
      </div>
      <ScrollArea>
        <div className="h-[400px] md:h-[35vh] grid sm:grid-cols-2 gap-5">
          {COURSES.map((course, index) => {
            return (
              <div
                key={index}
                className="w-full bg-foreground/10 rounded-md p-5 "
              >
                <div className=" flex flex-col gap-3 justify-between">
                  <div className=" leading-none text-transparent font-extrabold">
                    {course.num}
                  </div>
                  <h2 className="  leading-normal font-bold text">
                    {course.title}
                  </h2>
                  <p className="   text-sm flex items-center gap-2 ">
                    <div className="h-[5px] w-[5px] rounded-full bg-foreground" />
                    online course
                  </p>
                  <div className=" flex flex-col gap-5">
                    <a href={course.link} className=" place-self-end">
                      <Button
                        variant="default"
                        className=" flex group text-[10px] gap-2 font-bold p-2  "
                      >
                        View Certificate
                        <BsArrowUpRight className="  text-sm group-hover:rotate-45 transition-all duration-75  ease-in-out" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </TabsContent>
  );
}
