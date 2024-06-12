"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null)
    return(
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 f", className)}>
        <Menu setActive={setActive}>
            <Link href={"#"} >
            <MenuItem setActive={setActive} active={active} item="Home">

            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="text-sm flex-col flex space-y-4">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/requiremnt">All Requirement</HoveredLink>
            </div>
            


            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Product">

            </MenuItem>
           

            
        </Menu>

      </div>
    )
}
export default Navbar