import React from "react";

import { understanding } from "@/constants/data";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="relative w-full mt-20">
        <div
          className="absolute inset-0 top-1/4 md:mt-24 lg:mt-0 bg-gray-300 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-6xl mx-auto px-0 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start relative">
              <div className="flex flex-col items-center rounded shadow-xl col-start-3 lg:col-start-3 md:col-start-2 relative z-10 md:absolute md:top-0 max-w-sm mx-auto">
                <Image
                  className="w-80 h-96 md:ml-1 ml-24 object-cover"
                  alt="logo"
                  src={understanding}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center pb-12 md:pb-20 flex items-start flex-col md:flex-row">
          <div className=" text-left mt-10 p-10 md:max-w-md">
            <p className="text-lg">How it works</p>
            <h1 className="mb-5 sm:text-6xl text-5xl items-center">
              Understanding <br />
              your home
            </h1>
            <p className="mb-4 text-lg">
              Warmur knows that every home needs a tailored solution to deliver
              the best combination of green upgrades. Warmur’s calculator takes
              a unique whole-home energy approach, analysing local weather
              patterns, property type and energy use, to work out the best
              combination of heat pumps, solar, battery and electricity tariff
              for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
