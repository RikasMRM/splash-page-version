"use client";
import { warmurLogoColored } from "@/constants/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white w-full bg-primary-blue sm:px-16 px-8 sm:pt-24 sm:pb-12 py-12">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 items-center">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={warmurLogoColored}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[100%] h-[60px]"
          />
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          <div>
            <a href="mailto:hello@warmur.co.uk">hello@warmur.co.uk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
