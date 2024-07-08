import CardHover from "@/components/CardHover";
import Moving from "@/components/Moving";
import StickyRole from "@/components/StickyRole";
import Instructor from "@/components/Instructor"

import FeatureCourses from "@/components/featureCourses";
import Herosection from "@/components/herocomponent";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     
      <Herosection/>
      < FeatureCourses />
      < StickyRole />
      <Moving/>
      <CardHover/>
      <Instructor/>
      
      
     

    </main>
  );
}
