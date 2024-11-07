import React from "react";
import Image from "next/image";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
export default function HomePage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 items-center justify-center text-center">
        <Image
          src={"/images/per.png"}
          width={400}
          height={400}
          className="rounded-full h-20 w-20 bg-[#161616] filter grayscale border-foreground border-2"
          alt="kareem"
        />
        <h2 className="font-medium md:text-base text-sm">
          Hi, I&apos;m Karim A. Hassan
        </h2>
        <p className="md:text-4xl text-2xl">Web & Mobile Front-end developer</p>
      </div>
      <div className="flex md:gap-5 gap-2 md:mt-10 mt-5">
        <a href="/Karim Abelhalim.pdf" download>
          <button className="md:h-10 md:px-5 h-8 p-2 flex justify-center items-center gap-2 hover:bg-foreground hover:text-background border-[2px] text-main border-main rounded-full md:text-base text-xs transition-all duration-300 ease-in-out">
            download CV <FaDownload />
          </button>
        </a>
        <div className="flex md:gap-5 gap-2">
          <a
            href="https://www.linkedin.com/in/karim-abdel-halim-95a97a248/"
            className="md:h-10 md:w-10 h-8 w-8 flex justify-center items-center hover:bg-foreground hover:text-background border-[2px] text-main border-main rounded-full md:text-lg text-xs transition-all duration-300 ease-in-out"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Karim248119"
            className="md:h-10 md:w-10 h-8 w-8 flex justify-center items-center hover:bg-foreground hover:text-background border-[2px] text-main border-main rounded-full md:text-lg text-xs transition-all duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/kareem.kemo.75098364?mibextid=ZbWKwL"
            className="md:h-10 md:w-10 h-8 w-8 flex justify-center items-center hover:bg-foreground hover:text-background border-[2px] text-main border-main rounded-full md:text-lg text-xs transition-all duration-300 ease-in-out"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
}
