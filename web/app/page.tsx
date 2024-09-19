import App from "@/components/reusable/App";
import Hero from "@/components/reusable/Hero";
import Navbar from "@/components/reusable/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col lg:items-center ">
      <div className="h-[30rem] w-[30rem] rounded-full z-0 absolute blur-[160px] top-[-15rem] mx-auto bg-indigo-600 " />
      <Navbar />
      <div className="px-8 w-screen h-screen">
      <Hero/>
      </div>
    </div>
  );
}
