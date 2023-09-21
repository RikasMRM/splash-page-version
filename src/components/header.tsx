"use client";
import React from "react";
import { warmurLogo } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full px-10">
        <nav className="flex justify-between items-center max-container">
          <Link href="/">
            <Image
              src={warmurLogo}
              alt="logo"
              width={129}
              height={29}
              className="m-0 w-[100%] h-[60px]"
            />
          </Link>
        </nav>
      </header>
    </>
  );
}
