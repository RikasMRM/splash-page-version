"use client";

import Image from "next/image";

import { mobile } from "@/constants/data";

export default function ComingSoon() {
  return (
    <>
      <section
        id="coming-soon"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container sm:px-16 px-8 sm:py-5 py-12 relative"
      >
        <div className="absolute bottom-0 inset-x-0 h-[150px] bg-secondary-orange hidden md:block"></div>
        <div className="flex flex-1 align-middle justify-center relative z-10">
          <Image
            src={mobile}
            alt="Warmur ComingSoon"
            width={400}
            height={420}
            className="object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col z-10">
          <p className="xl:w-3/4  text-lg">Create a warmur home</p>
          <h1 className="mb-5 sm:text-6xl text-5xl items-center xl:w-2/2">
            Coming soon...
          </h1>
          <p className="mb-4 xl:w-3/4  text-lg">
            Our free calculator tool will provide you with
            an optimized and bespoke whole-home
            electrification plan. Currently in closed beta,
            we are launching to the public in December
            2023.
          </p>
        </div>
      </section>
    </>
  );
}

