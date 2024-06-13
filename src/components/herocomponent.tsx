import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border"
function Herosection() {
    return (
        <div className="h-auto md:h-[40rem] flex flex-col items-center justify-center w-full rounded-md relative overflow-hidden py-10 md:py-[10]">
            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <div className="p-4 z-10 relative text-center flex flex-col items-center justify-center h-full">
                <h1  className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
                <p className="mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Art music, also known as classical music,
                    is highly esteemed for its complexity and tradition.
                    Explore our courses to delve into this rich cultural heritage.
                </p>
                <div className="mt-7">
                    <Link href={"/courses"}>
                    <Button  borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"> Explore Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
