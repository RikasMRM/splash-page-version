import React from "react";
import { graph, woman, digit } from "@/constants/data";
import Image from "next/image";

export default function Statistics() {
  return (
    <>
      <section className="body-font h-full w-full bg-gray-300 pt-20 flex flex-col gap-5">
        <div className="grid grid-cols-1  md:grid-cols-2 md:grid-rows-8 gap-4 w-full max-w-3xl mx-auto h-auto md:h-[800px] p-10 md:p-0">
          <div className="md:row-span-4 md:col-start-1 md:row-start-2 relative h-[500px]  md:h-auto">
            <Image src={graph} fill alt="digit" className="object-cover" />
          </div>
          <div className="md:row-span-4 md:col-start-1 md:row-start-6 relative h-[500px]  md:h-auto">
            <Image src={woman} fill alt="digit" className="object-cover" />
          </div>
          <div className="md:row-span-3 md:col-start-2 md:row-start-1 relative h-[500px]  md:h-auto">
            <div className=" relative max-w-3xl mx-auto">
              <p className="my-4 text-lg">Create a warmur home</p>
              <h1 className="mb-5 sm:text-5xl text-4xl items-center Avenir xl:w-2/2">
                Simple plans, backed, by numbers
              </h1>
              <p className="text-lg">
                We start by building a 3D model of your home and a weather
                profile for your location. We then run hundreds of simulations
                to determine the optimal renewable configurations for you, and
                let you identify appropriate time-of-use energy tariffs. Warmur
                takes the hassle out of researching the combined benefits of
                multiple technologies and provides a simple plan that maximizes
                your investment.
              </p>
            </div>
          </div>
          <div className="md:row-span-4 md:col-start-2 md:row-start-4 relative h-[500px]  md:h-auto">
            <Image src={digit} fill alt="digit" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
