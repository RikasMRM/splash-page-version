import Image from "next/image";
import { whatwedo } from "@/constants/data";

export default function About() {
  return (
    <>
      <section className="body-font container mx-auto px-5 py-14">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-5 pb-24 justify-center items-center">
          <div className="md:w-1/2 p-5 md:p-0 flex justify-center">
            <Image
              layout="intrinsic"
              width={600}
              height={600}
              objectFit="cover"
              alt="logo"
              src={whatwedo}
            />
          </div>

          <div className="md:w-1/2 flex flex-col items-start p-5 md:p-0">
            <p className="my-4 text-lg md:text-xl">What we do</p>
            <h1 className="mb-5 text-3xl md:text-5xl font-semibold">
              Heat Pumps + solar + <br /> battery + tariffs, <br /> made simple
            </h1>
            <p className="mb-4 text-lg md:text-xl">
              Warmur understands that every home is unique. We build
              personalized Green Home Upgrade Plans that maximize your energy
              and carbon savings.
            </p>
            <div className="flex">
              <a
                className="inline-flex items-center px-5 py-2 mt-2 font-medium transition duration-500 ease-in-out transform bg-transparent border border-primary-orange rounded-full bg-gray-900"
                href="#how-it-works"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mb-4 text-2xl p-5 md:p-0">
          Warmur is creating a future of efficient, sustainable homes. By
          combining the benefits of multiple renewable technologies with time of
          use tariffs, we are helping people visualize their home’s green energy
          potential, unlocking energy savings and cutting carbon.
        </p>
      </section>
    </>
  );
}
