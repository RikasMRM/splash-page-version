"use client";
import React from "react";
import Image from "next/image";
import { home } from "@/constants/data";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        className="absolute inset-0 w-full h-[95%] object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src={home}
      />

      <div className="absolute inset-0 flex flex-col justify-center w-5/6 mx-auto">
        <div>
          <h1 className="font-normal text-white text-6xl sm:text-4xl md:text-8xl">
            Unlock your home&apos;s
            <br />
            green energy
            <br />
            potential
          </h1>
        </div>
      </div>
    </div>
  );
}
