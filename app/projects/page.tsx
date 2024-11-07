"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PROJECTS } from "./Projects";
import {
  FaGithub,
  FaGooglePlay,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FaFigma } from "react-icons/fa6";
import Button from "@/components/Button";

export default function Projects() {
  const [project, setProject] = useState(PROJECTS[0]);
  const [Grab, setGrab] = useState(false);
  const swiperRef = useRef<any>(null);

  const handleSlider = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(PROJECTS[currentIndex]);
  };

  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="w-full md:h-full h-min-[100vh] mx-auto flex justify-center items-center pb-20">
        <div className=" md:w-[80%]  w-full grid md:grid-cols-2 grid-cols-1 md:gap-[15vw]">
          <div className="h-full  w-full md:order-2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlider}
              onMouseDown={() => {
                setGrab(true);
              }}
              onMouseUp={() => {
                setGrab(false);
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className={`${Grab ? "cursor-grabbing" : "cursor-grab"}`}
            >
              {PROJECTS.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    alt="project pic"
                    src={item.img}
                    className=" w-full aspect-[10/8] object-cover flex justify-center items-center text-black"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-between px-2 gap-5 mt-2">
              <button
                className="text-foreground hover:text-main p-2"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <div className=" relative  overflow-hidden w-10 h-2 ">
                  <FaLongArrowAltLeft size={30} className=" absolute -top-4" />
                </div>
              </button>
              <button
                className="text-foreground hover:text-main  p-2"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <div className=" relative  overflow-hidden w-10 h-2 ">
                  <FaLongArrowAltRight size={30} className=" absolute -top-4" />
                </div>
              </button>
            </div>
          </div>
          <div className=" w-full md:aspect-[2.5/2] flex  flex-col gap-5 p-5 md:p-0 md:gap-0 md:justify-between">
            <div className=" md:text-[7vw] text-[20vw] leading-none  text-outline font-mono text-transparent font-extrabold">
              {project.num}
            </div>
            <h2 className="md:text-[2.7vw] text-[8vw] leading-none  font-bold text">
              {project.title}
            </h2>
            <p className=" text-foreground/60 md:text-[1vw] text-[3vw]">
              {project.description.replace(/'/g, "&rsquo;")}
            </p>

            <div className="  text-main md:text-[0.8vw] text-[2.5vw] flex 2">
              {project.skills}
            </div>

            <div className="w-full h-[1px] bg-foreground/60 "></div>
            <div className=" flex gap-3">
              {project.web && (
                <Button
                  variant="link"
                  href={project.web}
                  className="w-12 h-12 rounded-full hover:rotate-45 flex justify-center items-center  "
                >
                  <RxArrowTopRight className=" text-3xl " />
                </Button>
              )}
              {project.playstore && (
                <Button
                  variant="link"
                  href={project.playstore}
                  className="w-12 h-12 rounded-full flex justify-center items-center  "
                >
                  <FaGooglePlay className=" text-2xl " />
                </Button>
              )}
              {project.github && (
                <Button
                  variant="link"
                  href={project.github}
                  className="w-12 h-12 rounded-full flex justify-center items-center  "
                >
                  <FaGithub className=" text-3xl " />
                </Button>
              )}
              {project.figma && (
                <Button
                  variant="link"
                  href={project.figma}
                  className="w-12 h-12 rounded-full flex justify-center items-center  "
                >
                  <FaFigma className=" text-2xl " />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
