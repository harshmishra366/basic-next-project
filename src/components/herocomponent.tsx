import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
function Herosection() {
    return (
        <div className="h-auto md:h-[40rem] flex flex-col items-center justify-center w-full rounded-md relative overflow-hidden py-10 md:py-[10]">
            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <div className="p-4 z-10 relative text-center flex flex-col items-center justify-center h-full">
                <h1>Master the Art of Music</h1>
                <p className="my-4">
                    Art music, also known as classical music,
                    is highly esteemed for its complexity and tradition.
                    Explore our courses to delve into this rich cultural heritage.
                </p>
                <div>
                    <Link href={"/courses"}>
                        Explore Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Herosection;
