import ServicesCard from "@/app/services/ServicesCard";
import React from "react";
import { SERVICES } from "./data";

export default function Services() {
  return (
    <section id="services" className="flex flex-col pb-20">
      <div className=" flex-grow w-full flex flex-col items-center">
        <div className=" sm:w-[80%] w-[90%]  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {SERVICES.map((service, index) => {
            return <ServicesCard key={index} {...service} />;
          })}
        </div>
      </div>
    </section>
  );
}
