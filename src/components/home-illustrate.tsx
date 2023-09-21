import React from "react";
import Image from "next/image";

import { vectorNamed } from "@/constants/data";

export default function HomeIllustrate() {
  return (
    <>
      <div className="text-center w-full sm:py-24 py-12">
        <div>
          <div
            className="relative flex justify-center mb-8"
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            <div className="flex flex-col justify-center">
              <Image
                className="object-contain"
                width={900}
                height={920}
                alt="warmur home"
                src={vectorNamed}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
