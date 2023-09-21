"use client";

import Image from "next/image";

import { electrician } from "@/constants/data";

export default function DeliveringWarmur() {
  return (
    <>
      <section
        id="delivering-warmur"
        className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 sm:px-60 sm:py-24"
      >
        <div className="text-left max-w-8xl mx-auto pb-12 md:pb-20 flex flex-col items-start md:flex-row">
          <div className="mt-10 p-10 md:max-w-md">
            <p className="text-lg">How it works</p>
            <h1 className="mb-5 sm:text-6xl text-5xl">
              Delivering Warmur homes
            </h1>
            <p className="mb-4 text-lg">
              Energy efficiency and low running costs can only be achieved with
              careful system design and high quality installations. We have
              built an industry-leading network of top-tier installers to
              deliver your Warmur home.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={electrician}
            alt="product detail"
            width={600}
            height={800}
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
