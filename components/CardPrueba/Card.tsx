"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { LandingPage } from "../LandingPage/LandingPage";

const BackgroundBoxesDemo = ({ lang }: { lang: "en" | "es" }) => {
  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="md:text-4xl text-xl text-white relative z-20">
        <LandingPage lang={lang} />
      </div>
    </div>
  );
};

export default BackgroundBoxesDemo;
