"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import DarkMode from "@/components/DarkMode";
import ThemeSwitch from "@/components/Switch";

export default function Navbar() {
  const [IsOpened, setIsOpened] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const Links = [
    { name: "resume", path: "#resume" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-screen h-20 z-50 fixed top-0 left-0 bg-background ">
      <div className="h-20 w-full flex justify-between absolute items-center flex-row top-0 left-0 px-8 xl:px-20 z-30">
        <h1 className="xl:text-3xl text-lg font-semibold">
          Karim<span className="">.</span>
        </h1>

        <div className="sm:flex justify-center items-center gap-5 hidden navs font-bold">
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setActiveLink(link.name)}
              className={`${
                activeLink === link.name ? "border-b-2 " : ""
              } font-medium capitalize transition-all text-hover p-1 xl:text-sm text-xs`}
            >
              {link.name}
            </Link>
          ))}
          <DarkMode />
        </div>

        <div className="sm:hidden flex flex-col">
          <button onClick={() => setIsOpened(!IsOpened)}>
            <RiMenu3Fill size={20} />
          </button>
        </div>
      </div>

      <div
        className="h-[100vh] w-[60vw] flex flex-col items-center justify-center py-3 overflow-hidden navs sm:hidden z-50 bg-primary text-xs text-center gap-2 font-semibold fixed top-0 transition-all ease duration-700"
        style={{ left: IsOpened ? 0 : "-60vw" }}
      >
        <div className="-mt-10 mb-10">
          <ThemeSwitch />
        </div>

        {Links.map((link) => (
          <Link
            onClick={() => {
              setActiveLink(link.name);
              setIsOpened(false);
            }}
            key={link.name}
            href={link.path}
            className={`${
              activeLink === link.name ? "font-extrabold" : ""
            } font-medium capitalize text-background text-lg p-2`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
